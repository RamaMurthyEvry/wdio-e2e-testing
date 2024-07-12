import { Given, When } from "@cucumber/cucumber"
import formPage from "../../src/pages/Form.page.ts"
import formdata from "../resources/formdata.json" assert { type: 'json' };
import { parseJsonFile } from "../../src/utils/FileUtils.ts";
import { resourceFolderPath } from "../../src/constants/PathConst.ts";
import { addLog } from "../../src/utils/Commands.ts";

Given("I am on form page {string}", async (pageurl: string) => {
    await browser.url(pageurl);
    addLog(`Loading URL: ${pageurl}`)
    await browser.maximizeWindow();
    addLog("Maximizing window")
})

When("I enter all mandate fields", async () => {
    await formPage.setNames(formdata.firstname, formdata.lastname);
    await formPage.setEmail(formdata.email)
    await formPage.setMobileNumber(formdata.mobileno)
    await formPage.setSubject(formdata.subject)
})

When(/^I enter all mandate fields from (.+)$/, async (file: string) => {
    let testdata = parseJsonFile(resourceFolderPath + file);
    await formPage.setNames(testdata.firstname, testdata.lastname);
    await formPage.setEmail(testdata.email)
    await formPage.setMobileNumber(testdata.mobileno)
    await formPage.setSubject(testdata.subject)
})