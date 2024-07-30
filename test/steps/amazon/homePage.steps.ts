import { Then, When } from '@cucumber/cucumber';
import HomePage from '../../../src/pages/amazon-pages/home.page.ts'
import homePage from '../../../src/pages/amazon-pages/home.page.ts';
import { HomePageControl } from '../../../src/pages/amazon-controls/home.control.ts';

Then(/^Verify that (.*) is on the home page$/, async (userName: string) => {
	await HomePage.verifyUserName(userName);
});

When(/^User search (.*) product$/, async (product: string) => {
	await HomePage.searchProduct(product);
});

When(/^I navigate to the Electronics from (.+)$/, async() => {
	await HomePage.clickOnElectronic()
	console.log("clicking on electronics menu")
	await browser.pause(3000)
});

When(/^I select Laptops and accessories from the (.+)$/, async(submenu:string) => {
	await HomePage.clickOnLaptopAndAccesories(submenu)
	console.log("clicking on laptop & accessoroies submenu")
	await browser.pause(3000)
});

When(/^I select laptop from (.+)$/, async(catagory:string) => {
	await HomePage.selectLaptopFromCatagory(catagory)
	console.log("clicking on laptops from catagory")
	await browser.pause(3000)
});

Then(/^I should see a list of brand laptops$/, async() => {
	await homePage.verifyBrands()
	await browser.pause(3000)
});

Then(/^I select (.+) laptop from filter$/, async(brand:string) => {
	await homePage.selectBrand(brand)	
});



