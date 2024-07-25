import AddtoCartControls from "./AddtoCart.controls.ts";

class AddtoCartPage {
    public async selectProduct() {
        await AddtoCartControls.selectProduct.click();
        const allWindowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allWindowHandles[1]);
    }
    async addToCart() {
        await AddtoCartControls.addToCartBtn.click();
    }
    async getSuccessMessage() {
        return (await AddtoCartControls.successMessage).getText();
    }
    async goToCart() {
        await browser.pause(10000);
        const allWindowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allWindowHandles[0]);
        await AddtoCartControls.cartIcon.click();
    }
    async locateProductInCart(productName: string) {
        return await AddtoCartControls.isProductInCart(productName);
    }
    async RemoveProduct() {
        await browser.pause(2000);
        await (await AddtoCartControls.Remove).waitForClickable();
        await AddtoCartControls.Remove.click();
    }
    async RemovePromtMessage() {
        await browser.pause(2000);
        await (await AddtoCartControls.Removemsg).waitForClickable();
        await AddtoCartControls.Removemsg.click();
    }
    async isProductInCart(productName: string) {
        await browser.pause(10000);
        return await AddtoCartControls.isProductInCart(productName);
    }
}
export default new AddtoCartPage()
