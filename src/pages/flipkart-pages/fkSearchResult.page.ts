import { isTextMatchInLocator, getAllProductDetails } from '../../../src/utils/Commands.ts';
import fkHomeControl from '../flipkart-controls/fkHome.control.ts';
import fkSearchResultControl from "../flipkart-controls/fkSearchResult.control.ts";

//#region Flipkart Search Result
export class fkSearchResultPage {

    //#region Verify Searched Text
    async fkVerifySearchedText(text: string) {
        const isPresent = await isTextMatchInLocator(fkSearchResultControl.fkSearchedText, text);
        expect(isPresent).toBe(true);
    }
    //#endregion

    //#region Verify Product In Search Result 
    async fkVerifyProductInSearchResult(product: string) {
        const isProductNamePresent = await getAllProductDetails(fkSearchResultControl.fkSearchResults, product);
        expect(isProductNamePresent).toBe(true);
    }
    //#endregion

    //#region min and max filter dropdown
    async fkSelectPrice(min: string, max: string) {
        browser.pause(5000);
        await (fkSearchResultControl.drpdownItem_Min).selectByVisibleText(min);
        browser.pause(5000);
        await (await (fkSearchResultControl.drpdownItem_Max)).click();
        await (fkSearchResultControl.drpdownItem_Max).selectByVisibleText(max);
        browser.pause(10000);
    }
    //#endregion
    //#region Navigate Back To Product Search Page
    public async fkNavigateBackToProductSearch(product2: string) {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[0]);
        await (await fkSearchResultControl.fkSearchForProduct2).clearValue();
        await (await fkSearchResultControl.fkSearchForProduct2).setValue(product2);
        await fkHomeControl.fkSearchIcon.click();
        await browser.pause(1000);
    }
    //#endregion

}
//#endregion

export default new fkSearchResultPage();