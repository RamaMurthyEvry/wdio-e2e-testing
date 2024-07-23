import { Given, When, Then } from '@cucumber/cucumber';
import cartPage from '../../../src/pages/amazon-pages/cart.page.ts'
import searchResultControl from '../../../src/pages/amazon-controls/searchResult.control.ts';
import searchResultPage from '../../../src/pages/amazon-pages/searchResult.page.ts';
import PruductDetailsPage from '../../../src/pages/amazon-pages/productDetails.page.ts'
import productDetailsPage from '../../../src/pages/amazon-pages/productDetails.page.ts';

// import { isTextMatchInLocator, getAllProductDetails } from '../../../src/utils/Commands.ts';
let productName:Promise<string>;
let productQty:Promise<string>;
let productPrice:Promise<string>;

Then(/^User filter the product by price between Rs "([^"]*)" and "([^"]*)"$/, async(min:number, max:number) => {
    await searchResultPage.setMinMaxFilter(min, max)
});


Then(/^Verify that all displayed products fall within the specified price range Rs "([^"]*)" and "([^"]*)"$/, async (min:number, max:number) => {

    await searchResultPage.verifyProductPrice(min, max)
});


Then(/^Select one product and go to product details screen$/, async() => {
	await PruductDetailsPage.searchProductclick();
	await browser.pause(3000);
});


Then(/^Add product to the cart from product description page$/, async() => {
	productName = productDetailsPage.getProductName();
	productQty = productDetailsPage.getProductQty();
	productPrice = productDetailsPage.getProductPrice();
	await PruductDetailsPage.clickOnAddToCart()
    await PruductDetailsPage.verifySuccessMsg()

});

Then(/^Open the cart$/, async() => {
	
	await PruductDetailsPage.clickOnCartButton()
});

Then(/^Verify that the product is listed in the cart with correct details name, price, quantity$/, async() => {
	await cartPage.verifyProductDetails(productName,productQty,productPrice)
});

// Then(/^Remove item from the cart and verify$/, )async(args1) => {
//     await cartPage.clickOnDeleteLink()
//     await cartPage.getItemRemval();
//     await cartPage.verifyProductNoLongerListed();
//     console.log(`${args1}`);
// });






