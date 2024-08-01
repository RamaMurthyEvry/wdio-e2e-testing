import { Then } from '@cucumber/cucumber';
import fkSortByPage from '../../../src/pages/flipkart-pages/fkSortBy.page.ts'

//#region Sort By Step Definitions
Then(/^Sort by Popularity tab$/, async () => {
	await fkSortByPage.verifypopularity();
});

Then(/^Sort by Price -- Low to High tab$/, async () => {
	await fkSortByPage.verifyPriceLowtoHigh();
});

Then(/^Sort by Price -- High to Low$/, async () => {
	await fkSortByPage.verifyPriceHightoLow();
});

Then(/^Sort by Newest First$/, async () => {
	await fkSortByPage.verifyNewestFirst();
});
//#endregion