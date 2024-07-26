import { Then } from "@cucumber/cucumber"
import AddItemtoCartPage from '../../src/pages/AddItemtoCart.pages.ts'

Then('Click on save later', async() => {
    await AddItemtoCartPage.selectsaveforlater();
});

Then(/^Verify the product moved to save later$/, async() => {
	await AddItemtoCartPage.locateProductInCart("Samsung M34 5G");
});

Then(/^Click on move to cart$/, async() => {
	await AddItemtoCartPage.selectmovetocart();
});




