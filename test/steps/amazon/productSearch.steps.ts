import { When, Then } from '@cucumber/cucumber';
import searchResultPage from '../../../src/pages/amazon-pages/searchResult.page.ts'


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

Then(/^User add multiple Products (.*) to cart from search result$/, async (numbeOfproduct: number) => {
	await searchResultPage.addMultipleItemsAndVerifyAtCart(numbeOfproduct)
});
Then(/^The user selects first product and navigates to its details screen from search Result grid$/, async () => {
	await searchResultPage.searchGridProductClick()
});

