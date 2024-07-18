
import { Given, Then } from '@cucumber/cucumber';
import {openUrl} from '../../../src/utils/commands.ts';




Given(/^Open the application url (.*) in browser$/, (pageUrl:string) => {
	openUrl(pageUrl);
});
