import searchResultControl from '../amazon-controls/searchResult.control.ts';
import ProductDetailsContorl from '../amazon-controls/productDetails.contorl.ts'
import productDetailsContorl from '../amazon-controls/productDetails.contorl.ts';

class PruductDetailsPage {


    async searchProductclick() {
        await searchResultControl.SearchResults[0].click();
        const window = await browser.getWindowHandles();
        console.log(`window handle: ${window}`);
        await browser.pause(3000);
        await browser.switchToWindow(window[1]);
        let title = await browser.getTitle();
    }


    async getProductName() {
        return (await ProductDetailsContorl.productName).getText();
    }

    async getProductPrice() {
        return (await ProductDetailsContorl.productPrice).getText();
    }

    async getProductQty() {
        return (await productDetailsContorl.productQty).getText();
    }

    async clickOnAddToCart() {
        await searchResultControl.addtocart().scrollIntoView();
        await searchResultControl.addtocart().click();
        await browser.pause(20000);
    }


    async verifySuccessMsg() {
        return searchResultControl.successMsg
    }


    async clickOnCartButton() {
        await searchResultControl.cartbtn().click()
    }


}

export default new PruductDetailsPage()