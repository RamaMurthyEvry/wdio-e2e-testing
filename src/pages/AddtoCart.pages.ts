import AddtoCartControls from "./AddtoCart.controls.ts";

//#region Method to add product in the cart
class AddtoCartPage {
    //#region select a product
    public async selectProduct() {
        await AddtoCartControls.selectProduct.click();
        const allWindowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allWindowHandles[1]);
    }
    //#endregion
    //#region Add product to the cart
    async addToCart() {
        await AddtoCartControls.addToCartBtn.click();
    }
    //#endregion
    //#region Verify the success message
    async getSuccessMessage() {
        return (await AddtoCartControls.successMessage).getText();
    }
    //#endregion
    //#region Verify the product is moved to cart
    async goToCart() {
        await browser.pause(10000);
        const allWindowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allWindowHandles[0]);
        await AddtoCartControls.cartIcon.click();
    }
    //#endregion
    //#region Locate the product in the card
    async locateProductInCart(productName: string) {
        return await AddtoCartControls.isProductInCart(productName);
    }
    //#endregion
    //#region Remove the product from the cart
    async RemoveProduct() {
        await browser.pause(2000);
        await (await AddtoCartControls.Remove).waitForClickable();
        await AddtoCartControls.Remove.click();
    }
    //#endregion
    //#region Verify the prompt after removing the product from the cart
    async RemovePromtMessage() {
        await browser.pause(2000);
        await (await AddtoCartControls.Removemsg).waitForClickable();
        await AddtoCartControls.Removemsg.click();
    }
    //#endregion
    //#region Verify whether the product is in the cart
    async isProductInCart(productName: string) {
        await browser.pause(10000);
        return await AddtoCartControls.isProductInCart(productName);
    }
    //#endregion
}
//#endregion
export default new AddtoCartPage()
