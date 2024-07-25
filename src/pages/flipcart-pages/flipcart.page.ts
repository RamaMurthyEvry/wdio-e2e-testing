import { $ } from '@wdio/globals'
// import  HomePageControl  from '../amazon-controls/home.control.ts';
import { addLog, click, selectVisibleText, setText } from '../../../src/utils/Commands.ts';
import flipcartControls from '../flipcart-controls/flipcart.controls.ts';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage {
    public async removeProductFromCart (product: string) { 
        await (flipcartControls.removebutton).waitForClickable()
        const removeButton = await $(`//a[contains(text(),'${product}')]/ancestor::div[@class="_8X-K8p"]/following-sibling::div//div[text()="Remove"]`)  //verifying that added item is displayed
        await removeButton.waitForClickable()
        await removeButton.click()
        await (flipcartControls.confirmRemoveButton).waitForClickable()
        await (flipcartControls.confirmRemoveButton).click()              
      }
  
    public async verifyProduct (product:string, min:string, max:string) {  
          browser.pause(12000)        
          await (flipcartControls.removebutton).waitForClickable()   
          const element =await $(`//a[contains(text(),'${product}')]`) //verifying that added item is displayed
          const text= element.getText()
          const res = await element.isDisplayed();
          console.log("Result:", res )
          expect(res).toBe(true)//Compare with boolean true
          const actualPrice = await $(`//a[contains(text(),'${product}')]/parent::div[@class="gE4Hlh"]/following-sibling::span[contains(@class,"re6bBo")]`)  //verifying that added item is displayed
          const actualPriceText = await actualPrice.getText();
  
          const price = parseFloat(actualPriceText.replace(/[^0-9.-]+/g,""));//parsing the text
          console.log("parsed price:", price)
    
          console.log(`Cart price: ${actualPriceText}`);
          
          if(max !=="₹30000+"){
         //if passed string "max" is not equal to 30000+, code check the actual price lient within the range 
          console.log(`Expected range: ${min} - ${max}`);
    
          if (price < parseFloat(min.replace(/[^0-9.-]+/g,"")) || price > parseFloat(max.replace(/[^0-9.-]+/g,""))) {
              throw new Error(`Price ${actualPriceText} is not within the range ${min} - ${max}`);
              const res = false
              expect(res).toEqual(true)
          }

          else{
          console.log(`Price ${actualPriceText} is within the range ${min} - ${max}`);
          const res = true
          expect(res).toEqual(true)
          browser.pause(2000)
          }
        }
        else {
          // Check if the price is greater than 30000
          console.log(`Price ${actualPriceText} is greater than 30000`);
          expect(price).toBeGreaterThanOrEqual(parseFloat(max.replace(/[^0-9.-]+/g,"")))
         
      }

      }
         // expect(actualPriceText).toContain(price) 
        
    public async verifyConfirmationMessage(expectedMsg:string){
           const actual = await (flipcartControls.confirmationMessage).getText()
           console.log("!!!!!!!!!!", actual)
           expect(actual).toContain(expectedMsg)
         }
  
    public async verifyProductisNotDisplayed(product:string){
                 browser.pause(5000)
                 try {
                 const element = await $(`//a[contains(text(),${product})]`)
                  // Check if the product element exists
                  const isExisting = element.isExisting();
                  expect(isExisting).toEqual(false)
                  
              } catch (error) {
                 const isExisting = false;
                 console.error("product not displayed");
                 expect(isExisting).toEqual(false)
                  
              }
      
         }
        }
      
  
  
  
      /**
       * overwrite specific options to adapt it to page object
       */
      
  
  
  export default new CartPage();
  