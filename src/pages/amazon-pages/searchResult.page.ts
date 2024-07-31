import { isTextMatchInLocator, getAllProductDetails, selectDropdown, click } from '../../../src/utils/Commands.ts';
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

    async applySorting(sort: string) {
        await selectDropdown(searchResultControl.sortDropDown, sort)
        await browser.pause(5000);
        console.log("filter applied succesfully");
    }

    async verifySorting(sort: string) {

        let locator = searchResultControl.productPrice
        for (let i = 0; i < ((await locator).length) - 1; i++) {
            let prodDescription = parseInt((await locator[i].getText()).replace(/,/g, ''));
            let prodDescription2 = parseInt((await locator[i + 1].getText()).replace(/,/g, ''));
            if (sort == 'price-asc-rank') {
                if (!(prodDescription <= prodDescription2)) {
                    throw ("The prices are not sorted")
                }
            }
            if (sort == 'price-desc-rank') {
                if (!(prodDescription >= prodDescription2)) {
                    throw ("The prices are not sorted")
                }
            }

        }
        console.log("The products are sorted")

    }

    async selectFilter(filter_Option: string, value: string) {
        const seeMore = await browser.$(`//span[text()='${filter_Option}']//..//..//span[text()='See more']`)
        if (await seeMore.isExisting) {
            await seeMore.click();
        }
        await click(browser.$(`//span[text()='${value}']`));
    }

    async openDesiredProduct(text: string) {
        await this.clickOnProduct(await searchResultControl.searchResults, text);
        const window = await browser.getWindowHandles();
        console.log(`window handle: ${window}`);
        await browser.pause(3000);
        await browser.switchToWindow(window[1]);
    }

    async clickOnProduct(locator: any, text: string) {
        for (let i = 0; i < (await locator).length; i++) {
            let prodDescription: string = await locator[i].getText();
            if (prodDescription.includes(text)) {
                await locator[i].click();
                console.log("Printing product name: " + prodDescription)
                return true;
            }
        }
    }
}

export default new SearchResultPage();