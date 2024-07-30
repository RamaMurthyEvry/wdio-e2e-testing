import { Given, When, Then } from '@wdio/cucumber-framework';
import FlipkarthomePage from '../../../src/pages/flipkart-pages/FlipkartHome.page.ts';
import flipkartSearchResultsPage from '../../../src/pages/flipkart-pages/flipkartSearchResults.page.ts';
import FlipkartProductDetailsPage from '../../../src/pages/flipkart-pages/flipkartProductDetails.page.ts';
import flipkartPage from '../../../src/pages/flipkart-pages/flipkart.page.ts';
import flipkartProductDetailsPage from '../../../src/pages/flipkart-pages/flipkartProductDetails.page.ts';


Given(/^User is on the Flipkart home page$/, async ()=>{
    await browser.maximizeWindow()
    browser.url("https://www.flipkart.com/")     
})

When(/^User searches for the (.+)$/, async (product:string) => {
    await FlipkarthomePage.searchForProduct(product);
    await FlipkarthomePage.clickOnSearchIcon();
})

When(/^Navigate to (.+) details page$/, async (product:string) => {
    await flipkartSearchResultsPage.navigateToProductDetails(product)  
})


Then(/^Navigate back to product details Page and search (.+)$/, async (product2:string) => {
	await flipkartSearchResultsPage.navigateBackToProductDetails(product2);
    // await flipkartSearchResultsPage.clickOnProductandAddToCart();
});

Then(/^User click on add to cart$/, async () => {
    await flipkartSearchResultsPage.clickOnProductandAddToCart();
});


When(/^Add the product to a cart$/, async () => {
   await FlipkartProductDetailsPage.addProductToCart();
})


Then(/^user click on the shopping cart$/, async () => {
	await browser.pause(5000);
	await flipkartProductDetailsPage.clickOnShoppingCartButton();
});


Then(/^Verify that product is added to the cart successfully$/, async () => {
    await FlipkartProductDetailsPage.verifyTheCartItemsCount() 
 })

 Then(/^user click on the cart$/, async () => {
    await flipkartSearchResultsPage.navigateToCartPage();
 })

Then(/^Verify (.+) and (.+) (.+) price for the added item in cart details$/, async (product:string, min:string, max:string) => {
    // await flipkartSearchResultsPage.navigateToCartPage()
    await flipkartPage.verifyProduct(product, min, max)
 })

 Then(/^Verify that all displayed products fall within the specified price range "([^"]*)" and "([^"]*)"$/, async (min:number, max:number) => {
    await flipkartSearchResultsPage.fkVerifyProductPrice(min, max)
});
 
When(/^Verify (.+) is removed from the cart$/, async (product:string) => {   
    await flipkartPage.verifyProductisNotDisplayed(product)        
 })

When(/^Verify confirmation (.+) is displayed$/, async (message:string) => {
    await flipkartPage.verifyConfirmationMessage(message)  
  })

When(/^User remove the added product (.+) from cart$/, async (product:string) => {
    await flipkartPage.removeProductFromCart(product)
 })

Then('user should see search results displaying relevant {string} products', async (product:string) => {
    await flipkartSearchResultsPage.verifySearchResults(product)
})

Then('the product name {string} should appear in the search results', async (product:string) => {
    await flipkartSearchResultsPage.verifyPresenceOfProduct(product)
})

When(/^Filters for the price within the range (.+) (.+)$/, async (min:string, max:string) => {     
    await flipkartSearchResultsPage.selectPrice(min, max);
    browser.pause(5000);
})
