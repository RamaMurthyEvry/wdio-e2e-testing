import { APICalls } from "../../src/enums/APICalls.ts";
import { addLog, click, selectVisibleText, setText } from "../utils/Commands.ts";
import Page from "./Page.ts";
import usersPage from "../../src/pages/Users.control.ts";

class UsersPage extends Page {

    async openApp(pageurl: string) {
        await browser.url(pageurl)
        addLog(`Opening ${pageurl}`)
        await browser.maximizeWindow();
        addLog("Maximizing window")
    }

    async enterAPIUrl(apiendpoint: string) {
        await setText(usersPage.urlTextbox, apiendpoint)
    }

    async clickOnAjaxBtn() {
        await click(usersPage.ajaxBtn)
    }

    async getStatusText(): Promise<string> {
        await usersPage.successElem.waitForDisplayed();
        return usersPage.statusText.getText()
    }

    async getOutputText(): Promise<string> {
        return usersPage.outputArea.getText()
    }

    async selectMethod(apiType: APICalls) {
        await selectVisibleText(usersPage.methodDropDown, apiType)
    }

    async clickOnAddParamBtn() {
        await click(usersPage.addParamBtn)
    }

    async enterFirstParams(key: string, value: string) {
        await setText(usersPage.paramName1Textbox, key)
        await setText(usersPage.paramValue1Textbox, value)
    }

    async enterSecondParams(key: string, value: string) {
        await setText(usersPage.paramName2Textbox, key)
        await setText(usersPage.paramValue2Textbox, value)
    }

}
export default new UsersPage()