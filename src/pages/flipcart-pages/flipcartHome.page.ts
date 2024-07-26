import flipcartHomeControls from '../flipcart-controls/flipcartHome.controls.ts';
import { click } from '../../utils/Commands.ts';

//#region Flipcart-Home page methods
class FlipkartHomePage {  
   //#region Enter the product name in search bar
    public async enterProductName(product: string){
        await (flipcartHomeControls.searchBox).waitForClickable()
        await (flipcartHomeControls.searchBox).setValue(product) 
    }
    //#endregion

   //#region  search for the product
    public async searchForProduct (product: string) {
        this.enterProductName(product)      
    }
    //#endregion

    //#region click on search icon
    public async clickOnSearchIcon () {
        await  (flipcartHomeControls.searchIcon).waitForClickable({timeout:50000})
        await click(flipcartHomeControls.searchIcon)
        await click(flipcartHomeControls.searchIcon)        
    }      
    //#endregion  
   }

//#endregion
   export default new FlipkartHomePage();
    

