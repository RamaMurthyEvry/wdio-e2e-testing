import { Given, Then } from '@cucumber/cucumber'
import { addLog } from '../../src/utils/commands.ts';

Given(/^I open app url$/, async () => {
    await browser.maximizeWindow()
    addLog("Maximizing window")
    await browser.url('https://www.symplr.com/')
    addLog("Loading URL")
});

Then(/^I retrieve browser title$/, async () => {
    const title = await browser.getTitle()
    addLog(`Application Title:  ${title}`)
});
