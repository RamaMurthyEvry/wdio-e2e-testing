import AddItemToCartControls from '../../src/pages/AddItemtoCart.controls.ts'

class AddItemtoCartPage {

    async selectsaveforlater() {
        await browser.pause(2000);
        await (await AddItemToCartControls.selectsaveforlater).waitForClickable();
        await AddItemToCartControls.selectsaveforlater.click();
    }
    async selectmovetocart(){
        await browser.pause(2000);
        await (await AddItemToCartControls.selectmovetocart).waitForClickable();
        await AddItemToCartControls.selectmovetocart.click();
    }
    async locateProductInCart(productName: string) {
        return await AddItemToCartControls.isProductInCart(productName);
    }
}
export default new AddItemtoCartPage()
