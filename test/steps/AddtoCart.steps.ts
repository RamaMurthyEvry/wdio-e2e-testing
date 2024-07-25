import {  When, Then } from "@cucumber/cucumber"
import assertions from '../../src/utils/Assertions.ts';
import AddtoCartPage from '../../src/pages/AddtoCart.pages.ts'

When('user selects one product and goes to the product details screen', async () => {
    await AddtoCartPage.selectProduct();
    });

When('user clicks on the "Add to Cart" button', async () => {
    await AddtoCartPage.addToCart();
});

Then('verify a success message is displayed', async () => {
    const successMessage = await AddtoCartPage.getSuccessMessage();
    const ExpectedMessage = "Total Amount";
    assertions.toContain(successMessage, ExpectedMessage);
});

When('user clicks on the "Cart" icon', async () => {
    await AddtoCartPage.goToCart();
});

Then('verify the product is listed in the cart with correct details', async () => {
    await AddtoCartPage.locateProductInCart("Samsung M34 5G");
});

When('user locates the product to be removed', async () => {
    await AddtoCartPage.RemoveProduct();
});

When('confirms the removal if prompted', async () => {
    await AddtoCartPage.RemovePromtMessage();
});

Then('verify the product is no longer listed in the cart', async () => {
    const isProductPresent = await AddtoCartPage.isProductInCart("Samsung M34 5G"); 
    assertions.toBeFalse(isProductPresent);
});
