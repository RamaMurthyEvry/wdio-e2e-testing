import { $ } from '@wdio/globals'
import { exit, title } from 'process';
import flipcartsearchResultsControl from '../flipcart-controls/flipcartSearchResults.control.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FlipcartSearchPage {
    /**
     * define selectors using getter methods
     */
    

    
    public async navigateToProductDetails(product:String) {
        
        const element = await $(`//div[contains(text(), '${product}')]`);
        await element.click()
    //    browser.pause(30000)
            
    }     
 
   public async verifySearchResults(product:string){
    await (flipcartsearchResultsControl.serchList).forEach(async (title, index) => {
        const text = (await title.getText()).toLowerCase()
        const productlist:string[] = product.split(" ")
        const expected = productlist[0].toLowerCase()
        expect(text).toContain(expected)
        console.log("Relevent products are displayed")
        
    });
    }

    public async verifyPresenceOfProduct(product:string){
        const element = await $(`//*[contains(text(), '${product}')]`);
        element.isDisplayed()
    }
    
    public async selectPrice(min:string, max:string){
        browser.pause(5000)    
        await (flipcartsearchResultsControl.drpdownItem_Min).selectByVisibleText(min)
        browser.pause(5000)   
        await (await (flipcartsearchResultsControl.drpdownItem_Max)).click()
        await (flipcartsearchResultsControl.drpdownItem_Max).selectByVisibleText(max)    
        browser.pause(10000)
        }
    
    public async navigateToCartPage(){

            await (flipcartsearchResultsControl.cartIcon).waitForClickable({timeout: 5000})
            await (flipcartsearchResultsControl.cartIcon).click()
        }
              
    
    }


    
export default new FlipcartSearchPage();
