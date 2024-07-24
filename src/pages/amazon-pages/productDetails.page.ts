import searchResultControl from '../amazon-controls/searchResult.control.ts';
import ProductDetailsContorl from '../amazon-controls/productDetails.contorl.ts'
import productDetailsContorl from '../amazon-controls/productDetails.contorl.ts';

class PruductDetailsPage {


    async searchProductclick() {
        await searchResultControl.searchResults[0].click();
        const window = await browser.getWindowHandles();
        console.log(`window handle: ${window}`);
        await browser.pause(3000);
        await browser.switchToWindow(window[1]);
        // let title = await browser.getTitle();
    }


    async getProductName() {
        return (await ProductDetailsContorl.productName.getText()).substring(0,50);
    }

    async getProductPrice() {
        return parseInt((await ProductDetailsContorl.productPrice.getText()).replace(/,/g, ''));
    }

    async getProductQty() {
        return (await productDetailsContorl.productQty.getText()).substring(0,50);
       
    }

    async clickOnAddToCart() {
        await searchResultControl.addToCartBtn.scrollIntoView();
        await searchResultControl.addToCartBtn.click();
        await browser.pause(2000);
    }


    async verifySuccessMsg() {
        return searchResultControl.successMsg
    }


    async clickOnCartButton() {
        await searchResultControl.cartBtn.click()
    }


}

export default new PruductDetailsPage()