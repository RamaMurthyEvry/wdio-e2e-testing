import { ChainablePromiseArray, ChainablePromiseElement, ElementArray } from "webdriverio";
import report from '@wdio/allure-reporter'


export const addLog = (log: string) => {
    report.addStep(`STEP: ${log}`)
    console.log(`STEP: ${log}`)
}
export const getAllProductDetails = async (locator: ChainablePromiseArray<WebdriverIO.ElementArray>, text: string) => {
    try {
        let count = 0;
        for (let i = 0; i < (await locator).length; i++) {
            let prodDescription: string = await locator[i].getText();
            if (prodDescription.includes(text)) {
                count = count + 1;
                console.log("Printing product name: " + prodDescription)
            }

        }
        if (count == 0)
            return false;
        else
            console.log(count)
        return true;
    } catch (error) {
        console.error(`Error in getAllProductNames: ${error}`);
    }
}

export const isTextPresentInLocator = async (locator: ChainablePromiseElement<WebdriverIO.Element>, textToCheck: string): Promise<boolean> => {
    try {
        const elementText = await locator.getText();
        return elementText.includes(textToCheck);
    } catch (error) {
        console.error(`Error in isTextPresentInLocator: ${error}`);
        return false;
    }
}
export const isTextMatchInLocator = async (locator: ChainablePromiseElement<WebdriverIO.Element>, textToCheck: string): Promise<boolean> => {
    try {
        const elementText = await locator.getText();
        const cleanedText = elementText.replace(/"/g, '');
        return cleanedText === textToCheck;
    } catch (error) {
        console.error(`Do not match: ${error}`);
        return false;
    }
}

export const openUrl = async (path: string) => {
    addLog(`Opening App: ${path}`)
    await browser.url(path)
    await browser.maximizeWindow();
}

export const selectDropdown = async (elements: ChainablePromiseArray<ElementArray>, value: string) => {

    for (let i = 0; i < (await elements).length; i++) {
        const elem = await elements[i].getAttribute('value');
        if (elem === value) {
            await elements[i].click()
            addLog(`Selected dropdown value: ${value}`)
            break;
        }
    }
}

export const setText = async (element: ChainablePromiseElement<WebdriverIO.Element>, text: string) => {
    await element.setValue(text)
    addLog(`Entered value: ${text}`)
}

export const selectVisibleText = async (elem: ChainablePromiseElement<WebdriverIO.Element>, text: string) => {
    await elem.selectByVisibleText(text)
    addLog(`Selected by visible text: ${text}`)
}

export const click = async (elem: ChainablePromiseElement<WebdriverIO.Element>) => {
    await elem.click()
    addLog(`Clicked on element: ${await elem.selector}`)
}