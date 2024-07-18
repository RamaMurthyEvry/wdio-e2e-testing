import { Given, Then, When } from '@cucumber/cucumber';
import { openUrl} from '../../../src/utils/Commands.ts';
import HomePage from '../../../src/pages/amazon-pages/home.page.ts'



Given(/^Open the application url (.*) in browser$/, async (pageUrl: string) => {
	await openUrl(pageUrl);
});

Then(/^Verify that (.*) is on the home page$/, async(userName: string) => {
	HomePage.verifyUserName(userName);
});

When(/^User search (.*) product$/, async (product: string) => {
	HomePage.searchProduct(product);
});






