import { Given, Then, When } from '@cucumber/cucumber';
import { openUrl} from '../../../src/utils/Commands.ts';
import HomePage from '../../../src/pages/amazon-pages/home.page.ts'
import SearchResultPage from '../../../src/pages/amazon-pages/searchResult.page.ts'



Given(/^Open the application url (.*) in browser$/, async (pageUrl: string) => {
	await openUrl(pageUrl);
});

Then(/^Verify that (.*) is on the home page$/, async(userName: string) => {
	await HomePage.verifyUserName(userName);
});

When(/^User search (.*) product$/, async (product: string) => {
	await HomePage.searchProduct(product);
});

Then(/^Verify that the search results page displays (.*) search results$/, async(product: string) => {
	await SearchResultPage.verifySearchedText(product)
});









