import { Then, When } from '@cucumber/cucumber';
import HomePage from '../../../src/pages/amazon-pages/home.page.ts'

Then(/^Verify that (.*) is on the home page$/, async (userName: string) => {
	await HomePage.verifyUserName(userName);
});

When(/^User search (.*) product$/, async (product: string) => {
	await HomePage.searchProduct(product);
});