import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../../src/pages/login.page.ts';
import securepage from '../../src/pages/secure.control.ts';
import assertions from '../../src/utils/assertions.ts';

// const pages = {
//     login: LoginPage
// }

Given(/^I am on the login page screen$/, async () => {
	await LoginPage.open();
});


When(/^I login with (\w+) and (.+)$/, async (username:string, password:string) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message:string) => {
    await assertions.toBeExisting(securepage.flashAlert)
    await assertions.toHaveTextContain(securepage.flashAlert, message)
});
