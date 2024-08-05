import  fkHPControls  from '../flipkart-controls/fkHP.control.ts';
import  fkProductDetailsControls  from '../flipkart-controls/fkProductDetails.control.ts';
import  fkHomePageControl  from '../flipkart-controls/fkHome.control.ts';
import  fkCartPageControl  from '../flipkart-controls/fkCart.control.ts';
export class fkHpPage {
 //#region chooseProduct
 async chooseProduct() {
   await browser.pause(5000);
   await fkHomePageControl.searchBtn.click();
   await fkHPControls.chooselaptop.click();
}
//#endregion chooseProduct
//#region addProductToCart
async addProductToCart() {
   const allWindowHandles = await browser.getWindowHandles();
   await browser.switchToWindow(allWindowHandles[1]); 
   await fkProductDetailsControls.addToCart.click(); 
}
//#endregion addProductToCart
//#region goToCart
async goToCart() {
await browser.pause(2000); 
const allWindowHandles = await browser.getWindowHandles();
await browser.switchToWindow(allWindowHandles[0]);
await fkCartPageControl.cartIcon.click();
}
//#endregion goToCart
//#region verifyProductInResults
//#region saveProductForLater
async saveProductForLater() {
   browser.pause(4000);
   await (await fkHPControls.saveForLaterButton).waitForClickable();
   await fkHPControls.saveForLaterButton.click();
}
//#endregion saveProductForLater
  //#region moveProductToCart
async moveProductToCart() {
   await fkHPControls.moveToCartButton.click();
}
//#endregion moveProductToCart
    //#region verifyProductInResults
    async verifyProductInResults(productName: string): Promise<boolean> {
           await browser.pause(5000); 
      const elements = await fkHPControls.searchResults;
         for (const element of elements) {
          const text = await element.getText();
          if (text.includes(productName)) {
              return true; 
          }
      } return false; 
  }
  //#endregion verifyProductInResults
}
export default new fkHpPage()

