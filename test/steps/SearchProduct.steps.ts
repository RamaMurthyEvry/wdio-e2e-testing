import { Given, When, Then } from "@cucumber/cucumber"
import searchProductPages from '../../src/pages/SearchProduct.pages.ts'
import { addLog } from "../../src/utils/Commands.ts";

Given(/^user is on the Flipkart home page$/, async () => {
    await searchProductPages.open();
    await browser.maximizeWindow();
    addLog("Maximizing window")
});

When(/^user enters (.+) into the search bar$/, async (prodName: string) => {
    await searchProductPages.SearchProduct(prodName);
});

When(/^user clicks on the Search button$/, async () => {
    await searchProductPages.clickButton();
});

Then(/^user should see search results displaying relevant products$/, async () => {
    const message = await searchProductPages.getMessage();
    const actualmessage = "Samsung M34 5G";
    expect(message).toContain(actualmessage);
});

Then('the product name {string} should appear in the search results', async (ProdName: string) => {
    const productFound = await searchProductPages.verifyProductInResults(ProdName);
    expect(productFound).toBeTruthy(); 
 });






