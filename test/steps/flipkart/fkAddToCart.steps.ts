import { Then } from '@cucumber/cucumber';
import fkSearchResultPage from '../../../src/pages/flipkart-pages/fkSearchResult.page.ts';
import fkProductDetailsPage from '../../../src/pages/flipkart-pages/fkProductDetails.page.ts';
import fkCartPage from '../../../src/pages/flipkart-pages/fkCart.page.ts';

//#region Add To Cart Step Definitions
Then(/^Filters for the price within the range (.*) (.*)$/, async (min: string, max: string) => {
	await fkSearchResultPage.fkSelectPrice(min, max);
	browser.pause(5000);
});

Then(/^User select one product and go to product details screen$/, async () => {
	await fkProductDetailsPage.fkSearchProductClick();
	await browser.pause(3000);
});

Then(/^User click on the remove button in the cart page$/, async () => {
	await fkCartPage.fkClickOnRemoveButton();
});

Then(/^Verify (.*) message is displayed$/, async (message:string) => {
	await fkCartPage.fkVerifySuccessfullyRemovedMsg(message);
});
//#endregion
