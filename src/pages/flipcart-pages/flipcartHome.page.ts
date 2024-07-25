import { $ } from '@wdio/globals'
import { exit, title } from 'process';
import flipcartHomeControls from '../flipcart-controls/flipcartHome.controls.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FlipkartHomePage {  
    public async enterProductName(product: string){
        await (flipcartHomeControls.searchBox).waitForClickable()
        await (flipcartHomeControls.searchBox).setValue(product) 

    }
    public async searchForProduct (product: string) {
        this.enterProductName(product)
      
    }

    public async clickOnSearchIcon () {
        await  (flipcartHomeControls.searchIcon).waitForClickable()
        await(flipcartHomeControls.searchIcon).click()
        await(flipcartHomeControls.searchIcon).click()
    }
         
   }

   export default new FlipkartHomePage();
    

