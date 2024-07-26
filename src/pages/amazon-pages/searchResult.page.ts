import { isTextMatchInLocator, getAllProductDetails } from '../../../src/utils/Commands.ts';
import searchResultControl from "../amazon-controls/searchResult.control.ts";

export class SearchResultPage {
    async verifySearchedText(text: string) {
        const isPresent = await isTextMatchInLocator(searchResultControl.searchedText, text);
        expect(isPresent).toBe(true);
    }

    async verifyProductInSearchResult(product: string) {
        const isProductNamePresent = await getAllProductDetails(searchResultControl.searchResults, product)
        expect(isProductNamePresent).toBe(true);
    }

    async setMinMaxFilter(min: number, max: number) {
        const originalUrl = await browser.getUrl();
        const newUrl = originalUrl + "&low-price=" + min + "&high-price=" + max;
        await browser.url(newUrl)
    }

    async verifyProductPrice(min: number, max: number) {
        try {
            let locator = searchResultControl.productPrice
            let count = 0;
            let lenth = await locator.length
            for (let i = 0; i < (await locator).length; i++) {
                let prodDescription = (await locator[i].getText()).replace(/,/g, '');
                let prodDescriptionNumber: number = +prodDescription;
                if (prodDescriptionNumber >= min && prodDescriptionNumber <= max) {
                    count = count + 1;
                    console.log("Printing product name: " + prodDescription + " And Count: " + count)
                }
            }
            if (count == lenth)
                return true;
            else
                console.log("The count of the products which prices are in range is: " + count + " And the total products are " + lenth)
            return false;
        } catch (error) {
                console.error(`Error in getAllProductNames: ${error}`);
        }
    }
    
    async searchProductclick() {
     
        await searchResultControl.searchResults[0].click();
        const window = await browser.getWindowHandles();
        console.log(`window handle: ${window}`);
        await browser.pause(3000);
        await browser.switchToWindow(window[1]);
        // let title = await browser.getTitle();
    }

    async searchGridProductClick() {
     
        await searchResultControl.gridSearchResults[0].click();
        const window = await browser.getWindowHandles();
        console.log(`window handle: ${window}`);
        await browser.pause(3000);
        await browser.switchToWindow(window[1]);
        // let title = await browser.getTitle();
    }






}

export default new SearchResultPage();