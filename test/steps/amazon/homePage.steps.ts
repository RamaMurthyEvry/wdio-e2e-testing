import { Then, When } from '@cucumber/cucumber';
import homePage from '../../../src/pages/amazon-pages/home.page.ts'

Then(/^Verify that (.*) is on the home page$/, async (userName: string) => {
	await homePage.verifyUserName(userName);
});

When(/^User search (.*) product$/, async (product: string) => {
	await homePage.searchProduct(product);
});

When(/^user select (.*) option from main menu$/, async (mainMenu: string) => {
	await homePage.selectMainMenuItems(mainMenu);
});

Then(/^user select (.*) and (.*)$/, async (menu: string,subMenu:string) => {
	await homePage.selectMenuAndSubMenu(menu,subMenu);
});

