
import { waitForDisplayed } from 'webdriverio/build/commands/element';
import { click, setText } from '../../../src/utils/Commands.ts';


import  FlipkartControls  from '../Flipkart-Controls/FlipkartControls.ts';
export class Flipkart {
   
    async open() {
        await browser.url('https://www.flipkart.com/mobile-phones-store');
    }

    async SearchProduct(productName: string) {
        await setText(FlipkartControls.sarchBox, productName);
        
    }
    async clickButton() {
        await FlipkartControls.sarchBox.waitForDisplayed({timeout:4000})
        await click(FlipkartControls.sarchBtn);
       
    }
    async getStatusText(): Promise<string> {
        
   
      return (await FlipkartControls.actualText).getText();

    }

    async getValidationMessage() {
        await (await FlipkartControls.actualText).waitForDisplayed();
        return (await FlipkartControls.actualText).getText();
    }

    
    async verifyProductInResults(productName: string) {
    
        const productFound = await FlipkartControls.findProductInResults(productName);
        return productFound;
    }


    ///// tc 2 

    

    public async selectProduct() {
        await FlipkartControls.selectProduct.click();
        const allWindowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allWindowHandles[1]); 
        
    }
   async addToCart() {
        await FlipkartControls.addToCartBtn.click();
        }

    async getSuccessMessage() {
        return (await FlipkartControls.successMessage).getText(); }

   
    async goToCart() {
        await browser.pause(2000); 
        const allWindowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allWindowHandles[0]);
        await FlipkartControls.cartIcon.click();
    }

   
    async locateProductInCart(productName: string) {
        return await FlipkartControls.isProductInCart(productName);
    }
    async RemoveProduct() {
        await browser.pause(2000);
        await (await FlipkartControls.Remove).waitForClickable();
        await FlipkartControls.Remove.click();
    }
 
    async RemovePromtMessage() {
        await browser.pause(2000);
        await (await FlipkartControls.Removemsg).waitForClickable();
        await FlipkartControls.Removemsg.click();
       
    }

    async isProductInCart(productName: string) {
        await browser.pause(7000);
        return await FlipkartControls.isProductInCart(productName);

    }

    async AddProduct() {
        
        return await FlipkartControls.laptopsCategory.click();
       

    }

   }
    export default new Flipkart()