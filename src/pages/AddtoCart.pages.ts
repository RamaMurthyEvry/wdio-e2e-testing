import AddtoCartControls from "./AddtoCart.controls.ts";
import { click, setText } from "../utils/Commands.ts"
//#region Method to add product to the cart
class AddtoCartPage {
    //#region Launch the Flipkart Application
    async open() {
        await browser.url('https://www.flipkart.com/');
    }
    //#endregion
    //#region Search a product
    async searchproduct(product: string) {
        await setText(AddtoCartControls.InputField, product)
    }
    //#endregion
    //#region Click on the search button
    async searchButton() {
        await AddtoCartControls.SearchButton.click();
        await browser.pause(10000)
    }
    //#endregion
    //#region Apply filter to search the product
    async filterprice(min: string, max: string) {
        browser.pause(5000)
        await AddtoCartControls.Minprice.selectByVisibleText(min)
        browser.pause(5000)
        await (await (AddtoCartControls.MaxPrice)).click()
        await AddtoCartControls.MaxPrice.selectByVisibleText(max)
        await browser.refresh()
    }
    //#endregion
    //#region Open the product details window
    async productdetails() {
        await AddtoCartControls.product.click();
        const allWindowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allWindowHandles[1]);
        await browser.pause(5000);
    }
    //#endregion
    //#region Add the product to the cart
    async addproducttocart() {
        await AddtoCartControls.addtocart.click();
    }
    //#endregion
    //#region Verify the product in the cart
    async verifyproductincart() {
        await browser.pause(5000);
        (await AddtoCartControls.productincart).getText();
    }
    //#endregion
    //#region Remove the product from the cart
    async removeproductincart() {
        await browser.pause(5000);
        await (await AddtoCartControls.removeproduct).waitForClickable();
    }
    //#endregion
    //#region Verify the prompt while removing the product
    async removeproductprompt() {
        await browser.pause(5000);
        (await AddtoCartControls.removeproductprompt).getText();
        (await AddtoCartControls.removeBtn).waitForClickable();
    }
    //#endregion
    //#region Product should be removed successfully.
    async successmessageprompt() {
        await browser.pause(5000);
        await (await AddtoCartControls.removesuccessmessage).getText();
    }
    //#endregion
}
//#endregion
export default new AddtoCartPage()