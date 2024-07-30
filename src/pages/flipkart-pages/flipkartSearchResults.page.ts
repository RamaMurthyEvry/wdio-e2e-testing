import { $ } from '@wdio/globals'
import { click } from '../../utils/Commands.ts';
import flipkartsearchResultsControl from '../flipkart-controls/flipkartSearchResults.control.ts';
import flipkartProductDetailsPage from './flipkartProductDetails.page.ts';
import flipkartProductDetailsControl from '../flipkart-controls/flipkartProductDetails.control.ts';

class FlipkartSearchPage {

    async fkVerifyProductPrice(min: number, max: number) {
        try {
            let locator = flipkartsearchResultsControl.ProductPrice
            let count = 0;
            for (let i = 0; i < (await locator).length; i++) {
                let prodDescription = (await locator[i].getText()).replace(/,/g, '');
                let prodDescriptionNumber: number = +prodDescription;
                if (prodDescriptionNumber >= min && prodDescriptionNumber <= max) {
                    count = count + 1;
                    console.log("Printing product name: " + prodDescription + " And Count: " + count)
                }

            }
            if (count == 0)
                return false;
            else
                console.log("The count of the products which prices are in range is: " + count)
            return true;
        } catch (error) {
            console.error(`Error in getAllProductNames: ${error}`);
        }
    }

    public async navigateToProductDetails(product: String) {
        const element = $(`//div[contains(text(), '${product}')]`);
        await click(element)
    }

    public async navigateBackToProductDetails(product2: string) {
        await flipkartProductDetailsPage.switchToParentTab();
        await (await flipkartProductDetailsControl.searchForProduct).clearValue();
        await (await flipkartProductDetailsControl.searchForProduct).setValue(product2);
        await flipkartProductDetailsControl.fkSearchButton.click();
        await browser.pause(1000);

        
    }

    public async clickOnProductandAddToCart() {
        await flipkartsearchResultsControl.fkSearchResults[0].click();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[2]);
        // await flipkartProductDetailsPage.switchToParentTab();
        // await flipkartProductDetailsPage.switchTonewTab();
        await (flipkartProductDetailsControl.addToCart).waitForClickable({ timeout: 10000 });
        await click(flipkartProductDetailsControl.addToCart);
        await browser.pause(10000);
        // await flipkartsearchResultsControl.fkSearchResults[0].click();

    }

    public async verifySearchResults(product: string) {
        await (flipkartsearchResultsControl.serchList).forEach(async (title) => {
            const text = (await title.getText()).toLowerCase();
            const productlist: string[] = product.split(" ");
            const expected = productlist[0].toLowerCase();
            expect(text).toContain(expected);
        });

    }

    public async verifyPresenceOfProduct(product: string) {
        const element = await $(`//*[contains(text(), '${product}')]`);
        element.isDisplayed();
    }

    public async selectPrice(min: string, max: string) {
        browser.pause(5000);
        await (flipkartsearchResultsControl.drpdownItem_Min).selectByVisibleText(min);
        browser.pause(5000);
        await (await (flipkartsearchResultsControl.drpdownItem_Max)).click();
        await (flipkartsearchResultsControl.drpdownItem_Max).selectByVisibleText(max);
        browser.pause(10000);
        //adding pause to ensure the correct results are loaded, removing pause results in test failure
    }

    public async navigateToCartPage() {
        await (flipkartsearchResultsControl.cartIcon).waitForClickable();
        await click(flipkartsearchResultsControl.cartIcon);
        await browser.pause(5000);
    }

}

export default new FlipkartSearchPage();
