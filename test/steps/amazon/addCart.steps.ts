import { When, Then } from '@cucumber/cucumber';
import cartPage from '../../../src/pages/amazon-pages/cart.page.ts'
import searchResultPage from '../../../src/pages/amazon-pages/searchResult.page.ts';
import PruductDetailsPage from '../../../src/pages/amazon-pages/productDetails.page.ts'
import productDetailsPage from '../../../src/pages/amazon-pages/productDetails.page.ts';


let productName:string;
let productPrice:number;

async function setProductDetails() {
    productName = await productDetailsPage.getProductName();
    productPrice = await productDetailsPage.getProductPrice();
}

Then(/^User filter the product by price between Rs "([^"]*)" and "([^"]*)"$/, async(min:number, max:number) => {
    await searchResultPage.setMinMaxFilter(min, max)
});

Then(/^Verify that all displayed products fall within the specified price range Rs "([^"]*)" and "([^"]*)"$/, async (min:number, max:number) => {

    await searchResultPage.verifyProductPrice(min, max)
});

When(/^the user selects first product and navigates to its details screen$/, async() => {
	await PruductDetailsPage.searchProductclick();
	await browser.pause(3000);
});

When(/^Apply filter to display products priced between Rs "([^"]*)" and Rs "([^"]*)" only$/, async (min:number,max:number) => {
	await searchResultPage.setMinMaxFilter(min, max)
	await searchResultPage.verifyProductPrice(min, max)
});

Then(/^Add product to the cart from product description page$/, async() => {
	await setProductDetails()
	await PruductDetailsPage.clickOnAddToCart()
    await PruductDetailsPage.verifySuccessMsg()
});

When(/^the user opens the shopping cart$/, async() => {
	await  PruductDetailsPage.clickOnCartButton()    
});

Then(/^the product should be listed in the cart with correct details$/, async() => {
	await cartPage.verifyProductDetails(productName,productPrice)
});

Then(/^Remove item from the cart and verify$/, async() => {
    await cartPage.clickOnDeleteLink();
    await cartPage.verifyItemRemoved(productName);
    await cartPage.verifyProductNoLongerListed(productName);
});

Then(/^I save the (.+) for later and verify$/, async(productname:string) => {
	await cartPage.clickOnSaveForLater()
    console.log("clicked on save for later")
    await browser.pause(5000)
    await cartPage.verifysavedForLaterItem(productname)
});

Then(/^Move (.+) from Saved for Later to the cart and verify$/,async(productname:string) => {
	await cartPage.clickOnMoveToCart()
    console.log("clicked on moved to cart")
    await browser.pause(3000)
    await cartPage.verifyCartItem(productname)
});

Then(/^the (.+)should not be present in the Saved for Later section$/, async(productname:string) => {
    await browser.pause(5000)
	await cartPage.verifyItemInSaveForLater(productname)
});






