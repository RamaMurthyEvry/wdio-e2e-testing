import { isTextMatchInLocator, getAllProductDetails } from '../../../src/utils/Commands.ts';
import fkHomeControl from '../flipkart-controls/fkHome.control.ts';
import fkSearchResultControl from "../flipkart-controls/fkSearchResult.control.ts";

//#region Flipkart Search Result
export class fkSearchResultPage {
 
/// <summary>
/// Function to Verify Searched Text
///<para>{string} Text - The product name to search for.  </para>
/// </summary>
    async fkVerifySearchedText(text: string) {
        const isPresent = await isTextMatchInLocator(fkSearchResultControl.fkSearchedText, text);
        expect(isPresent).toBe(true);
    }

/// <summary>
/// Function to Verify Product In Search Result 
///<para>{string} product - The product name to search for.  </para>
/// </summary>
    async fkVerifyProductInSearchResult(product: string) {
        const isProductNamePresent = await getAllProductDetails(fkSearchResultControl.fkSearchResults, product);
        expect(isProductNamePresent).toBe(true);
    }
 
/// <summary>
/// Function to min and max filter dropdown
///<para>{string} min - The minimum price value to select </para>
///<para>{string} max - The maximum price value to select </para>
/// </summary>
    async fkSelectPrice(min: string, max: string) {
        browser.pause(5000);
        await (fkSearchResultControl.drpdownItem_Min).selectByVisibleText(min);
        browser.pause(5000);
        await (await (fkSearchResultControl.drpdownItem_Max)).click();
        await (fkSearchResultControl.drpdownItem_Max).selectByVisibleText(max);
        browser.pause(10000);
    }
   
/// <summary>
/// Function to Navigate Back To Product Search Page
///<para>{string} product2 - The name of the product to search for. </para>
/// </summary>
    public async fkNavigateBackToProductSearch(product2: string) {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[0]);
        await (await fkSearchResultControl.fkSearchForProduct2).clearValue();
        await (await fkSearchResultControl.fkSearchForProduct2).setValue(product2);
        await fkHomeControl.fkSearchIcon.click();
        await browser.pause(1000);
    } 
}
//#endregion

export default new fkSearchResultPage();