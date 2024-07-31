import { Given, Then, When } from '@cucumber/cucumber';
import { openUrl } from '../../../src/utils/Commands.ts';
import searchResultPage from '../../../src/pages/amazon-pages/searchResult.page.ts';

Given(/^Open the application url (.*) in browser$/, async (pageUrl: string) => {
	await openUrl(pageUrl);
});

Then(/^Verify that the search results page displays (.*) in search results$/, async (product: string) => {
	await searchResultPage.verifySearchedText(product)
});

Then(/^Verify that the product name appears in the search results (.*)$/, async (product: string) => {
	await searchResultPage.verifyProductInSearchResult(product)
});

Then(/^The user selects first product and navigates to its details screen from search Result grid$/,async () => {
	await searchResultPage.searchGridProductClick()
});

When(/^Apply sorting by (.*) and verify$/, async (sort: string,) => {
	await searchResultPage.applySorting(sort)
	if (sort == 'price-asc-rank' || sort == 'price-desc-rank') {
		await searchResultPage.verifySorting(sort);
	}
});
