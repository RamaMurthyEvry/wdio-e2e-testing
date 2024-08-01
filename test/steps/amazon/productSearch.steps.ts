import { Given, Then } from '@cucumber/cucumber';
import { openUrl } from '../../../src/utils/Commands.ts';
import searchResultPage from '../../../src/pages/amazon-pages/searchResult.page.ts'
import { When } from '@wdio/cucumber-framework';

Given(/^Open the application url (.*) in browser$/, async (pageUrl: string) => {
	await openUrl(pageUrl);
});

Then(/^Verify that the search results page displays (.*) in search results$/, async (product: string) => {
	await searchResultPage.verifySearchedText(product)
});

Then(/^Verify that the product name appears in the search results (.*)$/, async (product: string) => {
	await searchResultPage.verifyProductInSearchResult(product)
});

When(/^Apply sorting by (.*) and verify$/, async (sort: string,) => {
	await searchResultPage.applySorting(sort)
	if (sort == 'price-asc-rank' || sort == 'price-desc-rank') {
		await searchResultPage.verifySorting(sort);
	}
});

Then(/^Apply filter (.*) and select checkbox for subfilter (.*)$/, async (filter: string, subFilter: string) => {
	await searchResultPage.selectFilter(filter, subFilter)
});

Then(/^Select specific product (.*) from search result page$/, async (productname: string) => {
	await searchResultPage.openDesiredProduct(productname);
});

Then(/^The user selects first product and navigates to its details screen from search Result grid$/,async () => {
	await searchResultPage.searchGridProductClick()
});

