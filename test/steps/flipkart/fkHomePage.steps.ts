import { Then, When } from '@cucumber/cucumber';
import fkHomePage from '../../../src/pages/flipkart-pages/fkHome.page.ts';

//#region Home Page Step Definitions
Then(/^Verify that "([^"]*)" in the home page$/, async (login: string) => {
    await fkHomePage.verifyFlipKartUserName(login);
});

When(/^User searches for the (.+)$/, async (product: string) => {
    await fkHomePage.fkSearchForProduct(product);
});
//#endregion
