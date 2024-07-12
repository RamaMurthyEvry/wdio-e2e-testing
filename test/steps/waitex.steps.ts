<<<<<<< Updated upstream
import { Given, When, Then } from '@cucumber/cucumber';
import waitexpage from "../../src/pages/waitex.page.ts";
import waitexcontrol from "../../src/pages/waitex.control.ts";
import assertions from '../../src/utils/assertions.ts';
import { addLog } from '../../src/utils/commands.ts';
=======
import { Given, When, Then } from '@cucumber/cucumber'
import waitexpage from "../../src/pages/waitex.page.ts"
import assertions from '../../src/utils/Assertions.ts';
import { addLog } from '../../src/utils/Commands.ts';
>>>>>>> Stashed changes

Given(/^I am on dynamic loading (.+) page$/, async (appurl: string) => {
    await browser.maximizeWindow()
    addLog("Maximizing window")
    await browser.url(appurl)
    addLog(`Loading URL: ${appurl}`)
});

When(/^I click on start button$/, async () => {
    await waitexpage.clickOnStartButton()
});

Then(/^I validate loading icon$/, async () => {
    await waitexpage.waitForLoadingIcon();
    await waitexpage.waitForLoadingIconToDisappear();
    await waitexpage.waitForMessage();
    await browser.waitUntil(async () =>
        await waitexcontrol.msg.getText() === 'Hello World!',
        {
            timeout: 10000,
            timeoutMsg: "Element is not displayed in 10 sec"
        })
    await assertions.toBeDisplayed(waitexcontrol.msg)
})