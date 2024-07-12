import { When, Then } from "@cucumber/cucumber";
import * as fs from 'fs';
import path from 'path';
import { downloadFolderPath } from "../../src/constants/PathConst.ts";
import assertions from "../../src/utils/Assertions.ts";
import { click } from "../../src/utils/Commands.ts";
import { deleteDirectory } from "../../src/utils/FileUtils.ts";

When(/^I click on first file$/, async () => {
    await fs.mkdirSync(downloadFolderPath);
    const fileElement = $("//a[contains(@href, 'download')]");
    await click(fileElement)
    await browser.pause(6000)
})

Then(/^I validate downloaded file extension$/, async () => {
    const extensions = ['.jpg', '.txt', '.pdf', '.png', '.json', '.jpeg', '.xlsx']
    const files = fs.readdirSync(downloadFolderPath)
    files.forEach(file => {
        assertions.toContain(extensions, path.extname(file))
    })
    deleteDirectory(downloadFolderPath)
})


