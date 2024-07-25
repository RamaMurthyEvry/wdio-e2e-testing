import { $ } from '@wdio/globals'
import flipCartProductDetailsControl from '../flipcart-controls/flipcartProductDetails.control.ts';
import flipcartsearchResultsControl from '../flipcart-controls/flipcartSearchResults.control.ts';
import { click } from '../../utils/Commands.ts';

class FlipcartProductDetailsPage {
   
    public async switchTonewTab(){
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await browser.pause(3000);    
    }

    public async switchToParentTab(){
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[0]);
        browser.refresh()              
    }

    public async addProductToCart() {
        this.switchTonewTab()        
        await (flipCartProductDetailsControl.addToCart).waitForClickable({ timeout: 10000});
        await click(flipCartProductDetailsControl.addToCart)
        }
           
    public async verifyPresenceOfProduct(product:string){
        const element = await $(`//*[contains(text(), '${product}')]`);
        element.isDisplayed()
    }
    
    public async verifyTheCartItemsCount(){
        //comparing the count of items in cart before and after adding the product to cart
        let itemInCart_before: number = 0;
        let itemInCart_after: number = 0;    
        this.switchToParentTab()//switch back to parent tab to get the count of item added
        try {
        //adding try block to handle the exception if the item being added is the first one to be added in the cart            
            const isExisting = await (flipcartsearchResultsControl.itemsIncart).isExisting();    
            if (isExisting) {
                await (flipcartsearchResultsControl.itemsIncart).waitForDisplayed({ timeout: 10000 });
                const itemText = await (flipcartsearchResultsControl.itemsIncart).getText();
                itemInCart_before = parseInt(itemText, 10);
              } 
            }
            catch (error) {
           console.log("No items in the cart yet");
         }
        browser.refresh()
        const itemCartAfterText = await (flipcartsearchResultsControl.itemsIncart).getText();
        itemInCart_after = parseInt(itemCartAfterText, 10);
        expect(itemInCart_after).toEqual(itemInCart_before + 1);       
    }
}

export default new FlipcartProductDetailsPage();
