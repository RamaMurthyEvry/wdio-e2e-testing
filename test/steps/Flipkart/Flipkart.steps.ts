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

Then('the product name {string} should appear in the search results', async (productName: string) => {
   const productFound = await Flipkart.verifyProductInResults(productName);
   expect(productFound).toBeTruthy(); 
   await browser.closeWindow();
  
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

//#region Scenario3
When('I navigate to the Electronics section', async () => {
    const electronicsTab = await $('YOUR_SELECTOR_FOR_ELECTRONICS');
    await electronicsTab.moveTo();
  });
 When('user enters {string} into the search bar', async () => {
    const searchBox = await $('YOUR_SELECTOR_FOR_SEARCH_BOX');
    await searchBox.setValue('HP laptop');
    const searchButton = await $('YOUR_SELECTOR_FOR_SEARCH_BUTTON');
    await searchButton.click();
  });
  When('I choose an {string} from the list', async (productName: string) => {
    const laptopsCategory = await $(productName);
    await laptopsCategory.click();
  });
When('I click on the "Add to Cart" button', async () => {
    const addToCartButton = await $('YOUR_SELECTOR_FOR_ADD_TO_CART_BUTTON');
    await addToCartButton.click();
  });
  
  Then('the HP laptop should be added to my shopping cart', async () => {
    const cart = await $('YOUR_SELECTOR_FOR_SHOPPING_CART');
    expect(cart).toHaveTextContaining('HP laptop');
  });

//#endregion Scenario3

  

