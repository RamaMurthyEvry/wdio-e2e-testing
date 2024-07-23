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


    async getProduct_Name() {
        ProductDetailsContorl.productName
        const Name = await productDetailsContorl.productName
        await expect (Name).toHaveText('Samsung Galaxy M34 5G (Midnight Blue,6GB,128GB)|120Hz sAMOLED Display') 
    }


    async getProduct_Price() {
        ProductDetailsContorl.productPrice
        const Price = await productDetailsContorl.productPrice
        await expect(Price).toHaveValue('14,999')
    }


    async getProduct_Qty() {
        productDetailsContorl.productQty
        const Quantity = await productDetailsContorl.productQty
        await expect(Quantity).toHaveText('1')
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