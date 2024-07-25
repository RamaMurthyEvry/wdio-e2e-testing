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
    async verifyProductInResults(prodName: string) {
        const productFound = await SearchProductControls.verifyProductInResults(prodName);
        return productFound;
    }
}
export default new searchProductPages()
