import MovetoCartControls from "./MovetoCart.controls.ts";
import { click, setText } from "../utils/Commands.ts"
//#region Method to save a product for later 
class MovetoCartPage {
    //#region Launch Flipkart Application
    async open() {
        await browser.url('https://www.flipkart.com/');
    }
    //#endregion
    //#region Search for a product
    async searchproduct(product: string) {
        await setText(MovetoCartControls.InputField, product)
    }
    //#endregion
    //#region Click on search button
    async searchButton() {
        await MovetoCartControls.SearchButton.click();
        await browser.pause(10000)
    }
    //#endregion
    //#region Filter Price
    async filterprice(min: string, max: string) {
        browser.pause(5000)
        await MovetoCartControls.Minprice.selectByVisibleText(min)
        browser.pause(5000)
        await (await (MovetoCartControls.MaxPrice)).click()
        await MovetoCartControls.MaxPrice.selectByVisibleText(max)
        await browser.refresh()
    }
    //#endregion
    //#region Check the product details
    async productdetails() {
        await MovetoCartControls.product.click();
        const allWindowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allWindowHandles[1]);
        await browser.pause(5000);
    }
    //#endregion
    //#region Add product to the cart
    async addproducttocart() {
        await MovetoCartControls.addtocart.click();
    }
    //#endregion
    //#region Verify the product is in cart
    async verifyproductincart() {
        await browser.pause(5000);
        (await MovetoCartControls.productincart).getText();
    }
    //#endregion
    //#region Save the product for later
    async verifysaveforlater() {
        (await MovetoCartControls.saveforlater).waitForClickable();
    }
    //#endregion
    //#region Move the product to the cart
    async verifymovetocart(){
        await browser.pause(5000);
        await MovetoCartControls.movetocart.scrollIntoView();
        (await MovetoCartControls.movetocart).waitForClickable();
    }
    //#endregion
}
//#endregion
export default new MovetoCartPage()