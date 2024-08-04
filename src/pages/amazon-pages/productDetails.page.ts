import searchResultControl from '../amazon-controls/searchResult.control.ts';
import productDetailsContorl from '../amazon-controls/productDetails.contorl.ts';

class PruductDetailsPage {

    async searchProductclick() {
        await searchResultControl.searchResults[0].click();
        const window = await browser.getWindowHandles();
        console.log(`window handle: ${window}`);
        await browser.pause(3000);
        await browser.switchToWindow(window[window.length - 1]);
    }

    async getProductName() {
        return (await productDetailsContorl.productName.getText()).substring(0, 50);
    }

    async getProductPrice() {
        return parseInt((await productDetailsContorl.productPrice.getText()).replace(/,/g, ''));
    }

    async getProductQty() {
        return (await productDetailsContorl.productQty.getText()).substring(0, 50);
    }

    async clickOnAddToCart() {
        await searchResultControl.addToCartBtn.waitForDisplayed({ timeout: 10000 });
        await searchResultControl.addToCartBtn.scrollIntoView();
        await searchResultControl.addToCartBtn.click();
        await browser.pause(5000);
    }

    async verifySuccessMsg() {
        return searchResultControl.successMsg
    }

    async clickOnCartButton() {
        await searchResultControl.cartBtn.waitForDisplayed({ timeout: 10000 });
        await searchResultControl.cartBtn.click()
    }
}

export default new PruductDetailsPage()