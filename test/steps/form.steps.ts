import {Given, When} from "@cucumber/cucumber"
import formPage from "../../src/pages/form.page.ts"
import formdata from "../../test/resources/formdata.json" assert { type: 'json' };
import { parseJsonFile } from "../../src/utils/fileutils.ts";
import { RESOURCE_FOLDER_PATH } from "../../src/constants/pathconst.ts";
import { addLog } from "../../src/utils/commands.ts";

Given("I am on form page {string}", async(pageurl:string)=> {
    await browser.url(pageurl);
    addLog(`Loading URL: ${pageurl}`)
    await browser.maximizeWindow();
    addLog("Maximizing window")
})

When("I enter all mandate fields", async()=> {
    await formPage.setnames(formdata.firstname, formdata.lastname);
    await formPage.setEmail(formdata.email)
    await formPage.setMobileNumber(formdata.mobileno)
    await formPage.setSubject(formdata.subject)
})

When(/^I enter all mandate fields from (.+)$/, async(file:string)=> {
    let testdata = parseJsonFile(RESOURCE_FOLDER_PATH+file);
    await formPage.setnames(testdata.firstname, testdata.lastname);
    await formPage.setEmail(testdata.email)
    await formPage.setMobileNumber(testdata.mobileno)
    await formPage.setSubject(testdata.subject)
})