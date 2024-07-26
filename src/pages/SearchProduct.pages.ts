import { setText, click } from "../utils/Commands.ts"
import SearchProductControls from '../../src/pages/SearchProduct.controls.ts'

//#region method to SearchProduct
class searchProductPages {
    //#region launch flipkart application
    async open() {
        await browser.url('https://www.flipkart.com/');
    }
    //#endregion
    //#region Click on product search box
    async SearchProduct(prodName: string) {
        await setText(SearchProductControls.searchbox, prodName);
    }
    //#endregion
    //#region Click on search button
    async clickButton() {
        await click(SearchProductControls.searchBtn);
    }
    //#endregion
    //#region Get the text of the status
    async getStatusText(): Promise<string> {
        return (await SearchProductControls.actualText).getText();
    }
    //#endregion
    //#region Get the message
    async getMessage() {
        await (await SearchProductControls.actualText).waitForDisplayed();
        return (await SearchProductControls.actualText).getText();
    }
    //#endregion
    //#region Verify the validation message
    async getValidationMessage() {
        await (await SearchProductControls.actualText).waitForDisplayed();
        return (await SearchProductControls.actualText).getText();
    }
    //#endregion
    //#region Verify the search product results
    async verifyProductInResults(productName: string) {
        const productFound = await SearchProductControls.findProductInResults(productName);
        return productFound;
    }
    //#endregion
}
//#endregion
export default new searchProductPages()
