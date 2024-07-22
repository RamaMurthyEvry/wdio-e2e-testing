import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../../src/pages/Login.page.ts';
import SecurePage from '../../src/pages/secure.control.ts';
import assertions from '../../src/utils/Assertions.ts';

// const pages = {
//     login: LoginPage
// }

Given(/^I am on the login page screen$/, async () => {
	await LoginPage.open();
});


When(/^I login with (\w+) and (.+)$/, async (username:string, password:string) => {
    await LoginPage.login(username, password)
});

Then('I should see a flash message saying {string}', async (message:string) => {
    await assertions.toBeExisting(SecurePage.flashAlert)
    await assertions.toHaveTextContain(SecurePage.flashAlert, message)
});
