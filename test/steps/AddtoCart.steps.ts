import { Given, When, Then } from "@cucumber/cucumber"
import AddtoCartPage from '../../src/pages/AddtoCart.pages.ts'
import { addLog } from "../../src/utils/Commands.ts";

Given(/^Launch Flipkart application$/, async () => {
    await AddtoCartPage.open();
    await browser.maximizeWindow();
    addLog("Maximizing window")
});

When(/^Enter (.+) into the search bar$/, async (product: string) => {
    await AddtoCartPage.searchproduct(product);
    await AddtoCartPage.searchButton();
});

When(/^Filters for the price within the range (.+) (.+)$/, async (min: string, max: string) => {
    await AddtoCartPage.filterprice(min, max);
});

When(/^Navigate to (.+) details page$/, async (product: string) => {
    await AddtoCartPage.productdetails();
});

When(/^Add the product to a cart$/, async () => {
    await AddtoCartPage.addproducttocart();
});

Then(/^Verify that product is added to the cart successfully$/, async () => {
    await AddtoCartPage.verifyproductincart();
});

When(/^user locates the product to be removed$/, async () => {
    await AddtoCartPage.removeproductincart();
});
When(/^confirms the removal if prompted$/, async () => {
    await AddtoCartPage.removeproductprompt();
});