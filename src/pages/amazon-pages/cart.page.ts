import cartControl from '../amazon-controls/cart.control.ts';

class cartPage {

    async searchProductclick() {
        await cartControl.productClick().click();
        const window = await browser.getWindowHandles();
        console.log(`window handle: ${window}`);
        await browser.pause(30000);
        await browser.switchToWindow(window[1]);
        await browser.getTitle();
    }
    async clickOnAddToCart() {
        await cartControl.addtocart().scrollIntoView();
        await cartControl.addtocart().click();

        await browser.pause(20000);
    }
}
export default new cartPage();