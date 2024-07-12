import { addLog, click } from "../utils/Commands.ts"
import waitexpage from "./Waitex.control.ts"
import Page from "./Page.ts";


class WaitEx extends Page {

    async clickOnStartButton() {
        await click(waitexpage.startBtn);
    }

    async waitForLoadingIcon() {
        await waitexpage.loadingIco.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Failed while waiting for loading icon' })
        addLog(`waiting for Loading icon to appear`)
    }

    async waitForLoadingIconToDisappear() {
        await waitexpage.loadingIco.waitForDisplayed({ reverse: true, timeout: 10000 })
        addLog(`waiting for Loading icon to disappear`)
    }

    async waitForMessage() {
        await waitexpage.msg.waitForDisplayed({ timeout: 10000 })
        addLog(`waiting for element ${await waitexpage.msg.selector}`)
    }

}
export default new WaitEx()