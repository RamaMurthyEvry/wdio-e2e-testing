import { Given, Then} from '@cucumber/cucumber';
import { openUrl } from '../../../src/utils/Commands.ts';
import SearchResultPage from '../../../src/pages/amazon-pages/searchResult.page.ts'
import { When } from '@wdio/cucumber-framework';

Given(/^Open the application url (.*) in browser$/, async (pageUrl: string) => {
	await openUrl(pageUrl);
});

Then(/^Verify that the search results page displays (.*) in search results$/, async (product: string) => {
	await SearchResultPage.verifySearchedText(product)
});

Then(/^Verify that the product name appears in the search results (.*)$/, async (product: string) => {
	await SearchResultPage.verifyProductInSearchResult(product)

});


When(/^Apply sorting by (.*)$/, async (sort:string) => {
	await SearchResultPage.applySorting(sort)
});











