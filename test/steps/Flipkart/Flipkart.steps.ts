import { Given, When, Then } from '@wdio/cucumber-framework';
import Flipkart from '../../../src/pages/Flipkart-Pages/Flipkart.ts';
import assertions from '../../../src/utils/Assertions.ts';
import { openUrl } from '../../../src/utils/Commands.ts';
//#region steps for Scenario1
Given(/^Open the application url (.*) in browser$/, async (pageUrl: string) => {
	await openUrl(pageUrl);
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
Then(/^the product name (.+) should appear in the search results$/, async(productName:string) => {
	const productFound = await Flipkart.verifyProductInResults(productName);
  await expect(productFound).toBeTruthy(); 
});
//#endregion steps for Scenario1
//#region Steps for Scenario2
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
Then('verify the {string} is listed in the cart with correct details', async (productName: string) => {
    await Flipkart.locateProductInCart(productName);
});
When('user locates the product to be removed', async () => {
    await Flipkart.RemoveProduct();
});
When('confirms the removal if prompted', async () => {
    await Flipkart.RemovePromtMessage();
});
Then('verify the {string} is no longer listed in the cart', async (productName: string) => {
    const isProductPresent = await Flipkart.isProductInCart(productName); 
    assertions.toBeFalse(isProductPresent);
});
//#endregion Steps for Scenario2
//#region  Steps for Scenario3
When('I navigate to the Electronics section', async () => {
  await Flipkart.navigateToElectronics();
});

When('user enters {string} into the search bar', async (productName: string) => {
  await Flipkart.searchProduct(productName);
});

When('I choose an Laptop from the list', async () => {
  await Flipkart.chooseProduct();
});

When('I click on the "Add to Cart" button', async () => {
  await Flipkart.addProductToCart();
  await Flipkart.goToCart();
 });
//#endregion Steps for Scenario3





  

