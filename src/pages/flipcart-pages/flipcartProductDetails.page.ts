import { $ } from '@wdio/globals'
import flipCartProductDetailsControl from '../flipcart-controls/flipcartProductDetails.control.ts';
import flipcartsearchResultsControl from '../flipcart-controls/flipcartSearchResults.control.ts';
import { click } from '../../utils/Commands.ts';

//#region  Flipcart productdetails page methods
class FlipcartProductDetailsPage {
   
    //#region switch to child window
    public async switchTonewTab(){
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
    }
    //#endregion

    //#region switch to parent tab
    public async switchToParentTab(){
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[0]);                    
    }
    //#endregion

    //#region add product to cart
    public async addProductToCart() {
        this.switchTonewTab()        
        await (flipCartProductDetailsControl.addToCart).waitForClickable({ timeout: 10000});
        await click(flipCartProductDetailsControl.addToCart)
        }
    //#endregion
           
    //#region verify display of product in cart page
    public async verifyPresenceOfProduct(product:string){
        const element = await $(`//*[contains(text(), '${product}')]`);
        element.isDisplayed()
    }
    //#endregion

    
    //#region verify the CartItem count before and after adding the product to a cart
    public async verifyTheCartItemsCount(){
        //comparing the count of items in cart before and after adding the product to cart
        let itemInCart_before: number = 0;
        let itemInCart_after: number = 0;    
        this.switchToParentTab()//switch back to parent tab to get the count of item added
        try {
        //adding try block to handle the exception if the item being added is the first one to be added in the cart            
            await (flipcartsearchResultsControl.itemsIncart).isExisting(); 
            await (flipcartsearchResultsControl.itemsIncart).waitForDisplayed({ timeout: 10000 });
            const itemText = await (flipcartsearchResultsControl.itemsIncart).getText();
            itemInCart_before = parseInt(itemText, 10);
                }
           catch (error) {
           console.log("No items in the cart yet");
         }
        await browser.refresh()
        const itemCartAfterText = await (flipcartsearchResultsControl.itemsIncart).getText();
        itemInCart_after = parseInt(itemCartAfterText, 10);
        expect(itemInCart_after).toEqual(itemInCart_before + 1);       
    }
    //#endregion
}
//#endregion
export default new FlipcartProductDetailsPage();
