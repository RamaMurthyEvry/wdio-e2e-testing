import { Then } from '@cucumber/cucumber';
import fkSearchResultPage from '../../../src/pages/flipkart-pages/fkSearchResult.page.ts';
import fkProductDetailsPage from '../../../src/pages/flipkart-pages/fkProductDetails.page.ts';

//#region Flipkart Search Result Page
Then(/^Verify that the (.*) text is displyed in search results$/, async (product: string) => {
	await fkSearchResultPage.fkVerifySearchedText(product);
});

Then(/^Verify that the (.*) name list appears in the search results$/, async (product: string) => {
	await fkSearchResultPage.fkVerifyProductInSearchResult(product);
});

Then(/^User click on Add To Cart button in product details screen$/, async () => {
	await fkProductDetailsPage.fkAddProductToCart();
});

Then(/^Navigate back to product search Page and search (.+)$/, async (product2:string) => {
	await fkSearchResultPage.fkNavigateBackToProductSearch(product2);
});


Then(/^Switch back to product details screen$/, async () => {
	await fkProductDetailsPage.fkSwitchWindow();
});

//#endregion










