import { Given, When, Then } from "@cucumber/cucumber"
import searchProductPages from '../../src/pages/SearchProduct.pages.ts'
import { addLog } from "../../src/utils/Commands.ts";

Given(/^user is on the Flipkart home page$/, async () => {
    await searchProductPages.open();
    await browser.maximizeWindow();
    addLog("Maximizing window")
});

When(/^user enters (.+) into the search bar$/, async (product: string) => {
    await searchProductPages.searchproduct(product);
});

When(/^user clicks on the (.+) button$/, async (endpoint: string) => {
    await searchProductPages.searchButton();
});

Then(/^user should see search results displaying relevant products$/, async () => {
    await searchProductPages.verifysearchresult();
});

Then(/^the product name (.*) should appear in the search results$/, async (product: string) => {
    await searchProductPages.verifyproductfound();

});