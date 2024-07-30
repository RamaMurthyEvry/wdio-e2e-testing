import { Given, Then, When } from "@wdio/cucumber-framework";
import { openUrl } from "../../../src/utils/Commands.ts";
import SProduct from '../../../src/pages/amazon-pages/SearchingandSorting.page.ts'


Given(/^Open the application url <pageUrl> in browser$/, async(pageUrl: string) => {
    await openUrl(pageUrl);
	
});

When(/^User search <productName> product$/, async(productName: string) => {
	await SProduct.searchProduct(productName);
});

Then(/^Verify that the search results page displays <productName> in search results$/, async (productName: string) => {
	await SProduct.searchProduct(productName);
});
