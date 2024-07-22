import { Given, When, Then } from '@wdio/cucumber-framework';
import Flipkart from '../../src/pages/Flipkart.ts';
import type { GherkinDocument } from '@cucumber/messages';
import type Cucumber from '@cucumber/cucumber';
import { FlipkartControls } from '../../src/pages/FlipkartControls.ts';
import assertions from '../../src/utils/Assertions.ts';
import { addLog } from '../../src/utils/Commands.ts';

Given(/^user is on the Flipkart home page$/,async () => {
   await Flipkart.open();
   await browser.maximizeWindow();
    addLog("Maximizing window")
});

When(/^user enters (.+) into the search bar$/,async (productName: string) => {
   await Flipkart.SearchProduct(productName);
   });
   
When('user clicks on the Search button',async () => {
   await Flipkart.clickButton();
  });

Then('user should see search results displaying relevant products', async () => {
    const successMessage = await Flipkart.getValidationMessage();
    const ExpectedMessage = "Samsung M34 5G";
    expect(successMessage).toContain(ExpectedMessage);
});

Then('the product name {string} should appear in the search results', async (productName: string) => {
   const productFound = await Flipkart.verifyProductInResults(productName);
   expect(productFound).toBeTruthy(); 
});





////


When('user selects one product and goes to the product details screen', async () => {
    await Flipkart.selectProduct();
    });

When('user clicks on the "Add to Cart" button', async () => {
    await Flipkart.addToCart();
});

Then('verify a success message is displayed', async () => {
    const successMessage = await Flipkart.getSuccessMessage();
    const ExpectedMessage = "Total Amount";
    assertions.toContain(successMessage, ExpectedMessage);
});

When('user clicks on the "Cart" icon', async () => {
    await Flipkart.goToCart();
});

Then('verify the product is listed in the cart with correct details', async () => {
    
    await Flipkart.locateProductInCart("Samsung M34 5G");
});

When('user locates the product to be removed', async () => {
    await Flipkart.RemoveProduct();
});


When('confirms the removal if prompted', async () => {
    await Flipkart.RemovePromtMessage();
});

Then('verify the product is no longer listed in the cart', async () => {
    const isProductPresent = await Flipkart.isProductInCart("Samsung M34 5G"); 
    assertions.toBeFalse(isProductPresent);
});

