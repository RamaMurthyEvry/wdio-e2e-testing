import { $ } from '@wdio/globals'
import { click } from '../../utils/Commands.ts';
import flipcartsearchResultsControl from '../flipcart-controls/flipcartSearchResults.control.ts';

//#region Flipcart search page methods
class FlipcartSearchPage {
   
    //#endregion navigate to product details page
    public async navigateToProductDetails(product:String) {        
        const element = $(`//div[contains(text(), '${product}')]`);
        await click(element)         
    } 
    //#endregion    
 
   //#region verify the
   public async verifySearchResults(product:string){
    await (flipcartsearchResultsControl.serchList).forEach(async (title) => {
        const text = (await title.getText()).toLowerCase()
        const productlist:string[] = product.split(" ")
        const expected = productlist[0].toLowerCase()
        expect(text).toContain(expected)        
    });
    //#endregion
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
        //adding pause to ensure the correct results are loaded, removing pause results in test failure
        }
    
    public async navigateToCartPage(){
            await (flipcartsearchResultsControl.cartIcon).waitForClickable()
            await click(flipcartsearchResultsControl.cartIcon)
        }            
    }
//#endregion
export default new FlipcartSearchPage();
