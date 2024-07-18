
import { Given, Then } from '@cucumber/cucumber';
import {openUrl} from '../../../src/utils/Commands.ts';



Given(/^Open the application url (.*) in browser$/, async(pageUrl:string) => {
	await openUrl(pageUrl);
});


Then(/^Verify that the user is on the homepage$/, async() => {

});

