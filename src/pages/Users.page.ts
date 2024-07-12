import { APICalls } from "../../src/enums/APICalls.ts";
import { addLog, click, selectVisibleText, setText } from "../utils/Commands.ts";
import Page from "./page.ts";
import usersPage from "../../src/pages/Users.control.ts";

class UsersPage extends Page {
 
    async openApp(pageurl: string) {
        await browser.url(pageurl)
        addLog(`Opening ${pageurl}`)
        await browser.maximizeWindow();
        addLog("Maximizing window")
    }
    
    async enterAPIUrl(apiendpoint: string) {
        await setText(usersPage.url_textbox, apiendpoint)
    }

    async clickOnAjaxBtn() {
        await click(usersPage.ajax_btn)
    }

    async getStatusText(): Promise<string> {
        await usersPage.success_elem.waitForDisplayed();
        return usersPage.status_text.getText()
    }

    async getOutputText(): Promise<string> {
        return usersPage.output_area.getText()
    }

    async selectMethod(apiType: APICalls) {
        await selectVisibleText(usersPage.method_dropdown, apiType)
    }

    async clickOnAddParamBtn() {
        await click(usersPage.addParam_Btn)
    }

    async enterFirstParams(key: string, value:string) {
        await setText(usersPage.paramName1_textbox, key)
        await setText(usersPage.paramValue1_textbox, value)
    }

    async enterSecondParams(key: string, value:string) {
        await setText(usersPage.paramName2_textbox, key)
        await setText(usersPage.paramValue2_textbox, value)
    }

}
export default new UsersPage()