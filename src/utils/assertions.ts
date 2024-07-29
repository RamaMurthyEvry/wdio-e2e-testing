import { ChainablePromiseElement } from "webdriverio"
import { addLog } from "./Commands.ts"

class Assertion {

    toContain(actual:string | string[], expected:string) {
        expect(actual).toContain(expected)
        addLog(`Assertion >> ${actual} to contain ${expected}`)
    }

    toEqual(actual:string, expected:string) {
        expect(actual).toEqual(expected)
        addLog(`Assertion >> ${actual} to equal ${expected}`)
    }

    async toHaveText(element:ChainablePromiseElement<WebdriverIO.Element>, expectedText:string) {
        await expect(element).toHaveText(expectedText)
        addLog(`Assertion >> ${await element.selector} to have text ${expectedText}`)
    }

    async toHaveTextContain(element:ChainablePromiseElement<WebdriverIO.Element>, expectedText:string) {
        await expect(element).toHaveTextContaining(expectedText)
        addLog(`Assertion >> ${await element.selector} to have text containing ${expectedText}`)
    }

    async toBeExisting(element:ChainablePromiseElement<WebdriverIO.Element>) {
        await expect(element).toBeExisting();
        addLog(`Assertion >> ${await element.selector} is existing`)
    }

    async toBeDisplayed(element:ChainablePromiseElement<WebdriverIO.Element>) {
        await expect(element).toBeDisplayed();
        addLog(`Assertion >> ${await element.selector} is displayed`)
    }
/////

     toBeInRange = (actual: number, min: number, max: number) => {
        if (actual >= min && actual <= max) {
            console.log(`Assertion passed: ${actual} is within range [${min}, ${max}]`);
            return true;
        } else {
            console.error(`Assertion failed: ${actual} is not within range [${min}, ${max}]`);
            return false;
        }
    };
    
    toBeFalse = (condition: boolean) => {
        if (!condition) {
            console.log(`Assertion passed: Condition is false`);
            return true;
        } else {
            console.error(`Assertion failed: Condition is not false`);
            return false;
        }
    };
}
export default new Assertion()