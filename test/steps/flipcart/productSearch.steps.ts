import { Given, When, Then } from '@wdio/cucumber-framework';
import FlipCarthomePage from '../../../src/pages/flipcart-pages/FlipCartHome.page.ts';
import flipcartSearchResultsPage from '../../../src/pages/flipcart-pages/flipcartSearchResults.page.ts';
import FlipCartProductDetailsPage from '../../../src/pages/flipcart-pages/flipcartProductDetails.page.ts';
import flipcartPage from '../../../src/pages/flipcart-pages/flipcart.page.ts';


Given(/^User is on the Flipkart home page$/, async ()=>{
    await browser.maximizeWindow()
    browser.url("https://www.flipkart.com/")     
})

When(/^User searches for the (.+)$/, async (product:string) => {
    await FlipCarthomePage.searchForProduct(product)
    await FlipCarthomePage.clickOnSearchIcon()  
})

When(/^Navigate to (.+) details page$/, async (product:string) => {
    await flipcartSearchResultsPage.navigateToProductDetails(product)  
})

When(/^Add the product to a cart$/, async () => {
   await FlipCartProductDetailsPage.addProductToCart()  
})

Then(/^Verify that product is added to the cart successfully$/, async () => {
    await FlipCartProductDetailsPage.verifyTheCartItemsCount() 
 })

Then(/^Verify (.+) and (.+) (.+) price for the added item in cart details$/, async (product:string, min:string, max:string) => {
    await flipcartSearchResultsPage.navigateToCartPage()
    await flipcartPage.verifyProduct(product, min, max)  
 })
 
When(/^Verify (.+) is removed from the cart$/, async (product:string) => {   
    await flipcartPage.verifyProductisNotDisplayed(product)        
 })

When(/^Verify confirmation (.+) is displayed$/, async (message:string) => {
    await flipcartPage.verifyConfirmationMessage(message)  
  })

When(/^User remove the added product (.+) from cart$/, async (product:string) => {
    await flipcartPage.removeProductFromCart(product)
 })

Then('user should see search results displaying relevant {string} products', async (product:string) => {
    await flipcartSearchResultsPage.verifySearchResults(product)
})

Then('the product name {string} should appear in the search results', async (product:string) => {
    await flipcartSearchResultsPage.verifyPresenceOfProduct(product)
})

When(/^Filters for the price within the range (.+) (.+)$/, async (min:string, max:string) => {     
    await flipcartSearchResultsPage.selectPrice(min, max)
    browser.pause(5000)
})
