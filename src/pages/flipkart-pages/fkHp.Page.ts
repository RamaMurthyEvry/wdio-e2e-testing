import { click, setText } from '../../../src/utils/Commands.ts';
// import  fkHPControls  from '../Flipkart-Controls/FlipkartControls.ts';
export class fkHpPage {
  //#region chooseProduct
  async chooseProduct() {
    await browser.pause(5000);
    await fkHPControls.chooseProduct();
}
//#endregion chooseProduct
//#region navigateToElectronics
async navigateToElectronics() {
    await browser.pause(4000);
    await fkHPControls.navigateToElectronics();
}
 //#endregion navigateToElectronics
//#region addProductToCart
async addProductToCart() {
    const allWindowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(allWindowHandles[1]); 
     await fkHPControls.addProductToCart();
} //#region goToCart
async goToCart() {
await browser.pause(2000); 
const allWindowHandles = await browser.getWindowHandles();
await browser.switchToWindow(allWindowHandles[0]);
await fkHPControls.cartIcon.click();
}
//#endregion goToCart

}
export default new fkHpPage()
