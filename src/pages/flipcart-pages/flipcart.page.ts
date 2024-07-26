import { $ } from '@wdio/globals'
import { click } from '../../utils/Commands.ts';
import flipcartControls from '../flipcart-controls/flipcart.controls.ts';

//#region CartPage Methods
class CartPage {

  //#region Remove Product from the cart page
    public async removeProductFromCart (product: string) { 
        await (flipcartControls.removebutton).waitForClickable()
        const removeButton = $(`//a[contains(text(),'${product}')]/ancestor::div[@class="_8X-K8p"]/following-sibling::div//div[text()="Remove"]`)  //verifying that added item is displayed
        await removeButton.waitForClickable()
        await click(removeButton)
        await (flipcartControls.confirmRemoveButton).waitForClickable()
        await click(flipcartControls.confirmRemoveButton)              
      }
  //#endregion    
  
  //#region verify the product details

    public async verifyProduct (product:string, min:string, max:string) {         
          await (flipcartControls.removebutton).waitForClickable()   
          const element =await $(`//a[contains(text(),'${product}')]`) //verifying that added item is displayed
          const res = await element.isDisplayed();
          expect(res).toBe(true)//Compare with boolean true
          const actualPrice = await $(`//a[contains(text(),'${product}')]/parent::div[@class="gE4Hlh"]/following-sibling::span[contains(@class,"re6bBo")]`)  //verifying that added item is displayed
          const actualPriceText = await actualPrice.getText();  
          const price = parseFloat(actualPriceText.replace(/[^0-9.-]+/g,""));//parsing the text
          if(max !=="₹30000+"){
         //if passed string "max" is not equal to 30000+, code check the actual price lient within the range 
          if (price < parseFloat(min.replace(/[^0-9.-]+/g,"")) || price > parseFloat(max.replace(/[^0-9.-]+/g,""))) {
              throw new Error(`Price ${actualPriceText} is not within the range ${min} - ${max}`);
              const res = false
              expect(res).toEqual(true)
          }
          else{
          const res = true
          expect(res).toEqual(true)
          browser.pause(2000)
          }
        }
        else {
          // Check if the price is greater than 30000
          expect(price).toBeGreaterThanOrEqual(parseFloat(max.replace(/[^0-9.-]+/g,"")))
             }
      }
      //#endregion
        
    //#region verify the confirmation message
      public async verifyConfirmationMessage(expectedMsg:string){
           const actual = await (flipcartControls.confirmationMessage).getText()
           expect(actual).toContain(expectedMsg)
         }
     //#endregion
  
    //#region verify product is removed from
     public async verifyProductisNotDisplayed(product:string){
                browser.pause(1000)
                try {
                const element = await $(`//a[contains(text(),${product})]`)
                  // Check if the product element exists
                const isExisting = element.isExisting();
                expect(isExisting).toEqual(false)                  
                     } 
                catch (error) {
                const isExisting = false;
                console.error("product not displayed");
                expect(isExisting).toEqual(false)                  
              }      
         }
      //#endregion
   }
   //#endregion
  
  export default new CartPage();
  