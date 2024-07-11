import { When, Then } from "@cucumber/cucumber";
import * as fs from 'fs';
import path from 'path';
import { DOWNLOAD_FOLDER_PATH } from "../../src/constants/pathconst.ts";
import assertions from "../../src/utils/assertions.ts";
import { click } from "../../src/utils/commands.ts";
import { deleteDirectory } from "../../src/utils/fileutils.ts";

When(/^I click on first file$/, async ()=> {
    await fs.mkdirSync(DOWNLOAD_FOLDER_PATH);
    const fileElement = $("//a[contains(@href, 'download')]");
    await click(fileElement)
    await browser.pause(6000)
})

Then(/^I validate downloaded file extension$/, async ()=> {
    const extensions = ['.jpg', '.txt', '.pdf', '.png', '.json', '.jpeg', '.xlsx']
    const files = fs.readdirSync(DOWNLOAD_FOLDER_PATH)
    files.forEach(file => {
        assertions.toContain(extensions, path.extname(file))
    })
    deleteDirectory(DOWNLOAD_FOLDER_PATH)
})


