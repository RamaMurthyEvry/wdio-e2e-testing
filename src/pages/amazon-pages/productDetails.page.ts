import searchResultControl from '../amazon-controls/searchResult.control.ts';
import ProductDetailsContorl from '../amazon-controls/productDetails.contorl.ts'
import productDetailsContorl from '../amazon-controls/productDetails.contorl.ts';

class PruductDetailsPage {


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
        await searchResultControl.cartBtn.waitForDisplayed({ timeout: 10000 });
        await searchResultControl.cartBtn.click()
    }


}

export default new PruductDetailsPage()