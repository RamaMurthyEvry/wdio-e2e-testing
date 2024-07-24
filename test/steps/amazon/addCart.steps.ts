import { When, Then } from '@cucumber/cucumber';
import cartPage from '../../../src/pages/amazon-pages/cart.page.ts'
import searchResultPage from '../../../src/pages/amazon-pages/searchResult.page.ts';
import PruductDetailsPage from '../../../src/pages/amazon-pages/productDetails.page.ts'
import productDetailsPage from '../../../src/pages/amazon-pages/productDetails.page.ts';


let productName:string;
let productPrice:number;


// When(/^the user filters products within the price range of Rs “10000” to “15000” then only those products should be displayed$/, async(min:number, max:number) => {
// 	await searchResultPage.setMinMaxFilter(min, max)
//     await searchResultPage.verifyProductPrice(min, max)
// });

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
	productName = await productDetailsPage.getProductName();
	productPrice = await productDetailsPage.getProductPrice();
	await PruductDetailsPage.clickOnAddToCart()
    await PruductDetailsPage.verifySuccessMsg()

});

Then(/^the user opens the shopping cart$/, async() => {
	await PruductDetailsPage.clickOnCartButton()
});

Then(/^the product should be listed in the cart with correct details - name, price, and quantity$/, async() => {
	await cartPage.verifyProductDetails(productName,productPrice)
});

Then(/^Remove item from the cart and verify$/, async() => {
    await cartPage.clickOnDeleteLink();
    await cartPage.verifyItemRemoved(productName);
    await cartPage.verifyProductNoLongerListed(productName);
});






