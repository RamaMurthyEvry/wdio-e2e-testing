import { click, setText } from '../../../src/utils/Commands.ts';
import  FlipkartControls  from '../Flipkart-Controls/FlipkartControls.ts';
export class Flipkart {
    //#region  SearchProduct
   async SearchProduct(productName: string) {
        await setText(FlipkartControls.sarchBox, productName);
        }
        //#endregion SearchProduct
    //#region  ClickButton
    async clickButton() {
        await FlipkartControls.sarchBox.waitForDisplayed({timeout:4000})
        await click(FlipkartControls.sarchBtn);
        }
        //#endregion ClickButton
    //#region getStatusText
    async getStatusText(): Promise<string> {
        return (await FlipkartControls.actualText).getText();}
        //#endregion getStatusText
    //#region getValidationMessage
    async getValidationMessage() {
        await (await FlipkartControls.actualText).waitForDisplayed();
        return (await FlipkartControls.actualText).getText();
    }
    //#endregion getValidationMessage
    //#region verifyProductInResults
    async verifyProductInResults(productName: string) {
        const productFound = await FlipkartControls.findProductInResults(productName);
        return productFound;
    }
    //#endregion verifyProductInResults
    //#region selectProduct
    public async selectProduct() {
        await FlipkartControls.selectProduct.click();
        const allWindowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allWindowHandles[1]); 
         }
         //#endregion selectProduct
    //#region addToCart
     async addToCart() {
        await FlipkartControls.addToCartBtn.click();
        }
        //#endregion addToCart
    //#region getSuccessMessage
        async getSuccessMessage() {
        return (await FlipkartControls.successMessage).getText(); }
        //#endregion getSuccessMessage
    //#region goToCart
        async goToCart() {
        await browser.pause(2000); 
        const allWindowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allWindowHandles[0]);
        await FlipkartControls.cartIcon.click();
    }
    //#endregion goToCart
    //#region locateProductInCart
     async locateProductInCart(productName: string) {
        return await FlipkartControls.isProductInCart(productName);
    }
    //#endregion locateProductInCart
    //#region RemoveProduct
    async RemoveProduct() {
        await browser.pause(2000);
        await (await FlipkartControls.Remove).waitForClickable();
        await FlipkartControls.Remove.click();
    }
    //#endregion RemoveProduct
    //#region RemovePromtMessage
    async RemovePromtMessage() {
        await browser.pause(2000);
        await (await FlipkartControls.Removemsg).waitForClickable();
        await FlipkartControls.Removemsg.click();
       }
    //#endregion RemovePromtMessage
    //#region isProductInCart
        async isProductInCart(productName: string) {
        await browser.pause(4000);
        return await FlipkartControls.isProductInCart(productName); }
    //#endregionisProductInCart
    //#region navigateToElectronics
     async navigateToElectronics() {
        await browser.pause(4000);
        await FlipkartControls.navigateToElectronics();
    }
     //#endregion navigateToElectronics
     //#region searchProduct
    async searchProduct(productName: string) {
        await browser.pause(4000);
        await FlipkartControls.searchProduct(productName);
    }
    //#endregion searchProduct
    //#region chooseProduct
    async chooseProduct() {
        await browser.pause(5000);
        await FlipkartControls.chooseProduct();
    }
    //#endregion chooseProduct
    //#region addProductToCart
    async addProductToCart() {
        const allWindowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allWindowHandles[1]); 
         await FlipkartControls.addProductToCart();
    }
    //#endregion addProductToCart
     //#region saveProductForLater
     async saveProductForLater() {
        browser.pause(4000);
        await (await FlipkartControls.saveForLaterButton).waitForClickable();
        await FlipkartControls.saveForLaterButton.click();
    }
    //#endregion saveProductForLater
       //#region moveProductToCart
    async moveProductToCart() {
        await FlipkartControls.moveToCartButton.click();
    }
    //#endregion moveProductToCart
     }
    export default new Flipkart()