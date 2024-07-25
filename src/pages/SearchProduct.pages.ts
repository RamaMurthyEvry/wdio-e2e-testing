import { setText, click } from "../utils/Commands.ts"
import SearchProductControls from '../../src/pages/SearchProduct.controls.ts'

class searchProductPages {
    async open() {
        await browser.url('https://www.flipkart.com/');
    }
    async SearchProduct(prodName: string) {
        await setText(SearchProductControls.searchbox, prodName);
    }
    async clickButton() {
        await click(SearchProductControls.searchBtn);
    }
    async getStatusText(): Promise<string> {
        return (await SearchProductControls.actualText).getText();
    }
    async getMessage() {
        await (await SearchProductControls.actualText).waitForDisplayed();
        return (await SearchProductControls.actualText).getText();
    }
    async getValidationMessage() {
        await (await SearchProductControls.actualText).waitForDisplayed();
        return (await SearchProductControls.actualText).getText();
    }
    async verifyProductInResults(productName: string) {
        const productFound = await SearchProductControls.findProductInResults(productName);
        return productFound;
    }
}
export default new searchProductPages()
