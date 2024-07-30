import { Then } from '@cucumber/cucumber';
import fkSearchResultPage from '../../../src/pages/flipkart-pages/fkSearchResult.page.ts';

//#region Flipkart Search Result Page
Then(/^Verify that the (.*) text is displyed in search results$/, async (product: string) => {
	await fkSearchResultPage.fkVerifySearchedText(product);
});

Then(/^Verify that the (.*) name list appears in the search results$/, async (product: string) => {
	await fkSearchResultPage.fkVerifyProductInSearchResult(product);
});
//#endregion











