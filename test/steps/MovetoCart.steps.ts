import { Given, When, Then } from "@cucumber/cucumber"
import MovetoCartPage from '../../src/pages/MovetoCart.pages.ts'
import { addLog } from "../../src/utils/Commands.ts";

Given(/^Open Flipkart Application$/, async () => {
    await MovetoCartPage.open();
    await browser.maximizeWindow();
    addLog("Maximizing window")
});

When(/^Enter (.+) into the search box$/, async (product: string) => {
    await MovetoCartPage.searchproduct(product);
    await MovetoCartPage.searchButton();
});

When(/^Filters for the prices within the range (.+) (.+)$/, async (min: string, max: string) => {
    await MovetoCartPage.filterprice(min, max);
});

When(/^Navigate to (.+) detail page$/, async (product: string) => {
    await MovetoCartPage.productdetails();
});

When(/^Add the product to the cart$/, async () => {
    await MovetoCartPage.addproducttocart();
});

Then(/^Verify that product is added to cart successfully$/, async () => {
    await MovetoCartPage.verifyproductincart();
});

Then(/^select "save for later" the selected product$/, async () => {
    await MovetoCartPage.verifysaveforlater();
});

Then(/^Again "move to the cart" the selected product$/, async () => {
    await MovetoCartPage.verifymovetocart();
});