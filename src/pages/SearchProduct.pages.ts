import SearchProductControls from '../../src/pages/SearchProduct.controls.ts'
import { click, setText } from "../utils/Commands.ts"
//#region method to search the product
class searchProductPages {
    //#region Launch Flipkart Application
    async open() {
        await browser.url('https://www.flipkart.com/');
    }
    //#endregion
    //#region Search for the product
    async searchproduct(product: string) {
        await setText(SearchProductControls.InputField, product)
    }
    //#endregion
    //#region Click on the search button
    async searchButton() {
        await SearchProductControls.SearchButton.click();
        await browser.pause(10000)
    }
    //#endregion
    //#region Verify the search results
    async verifysearchresult() {
        await browser.pause(5000)
        return SearchProductControls.SearchResult.getText();
    }
    //#endregion
    //#region Found the expected product
    async verifyproductfound() {
        (await SearchProductControls.productfound).getText();
    }
    //#endregion
}
//#endregion
export default new searchProductPages()