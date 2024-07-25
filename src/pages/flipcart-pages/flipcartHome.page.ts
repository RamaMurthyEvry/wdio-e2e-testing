import flipcartHomeControls from '../flipcart-controls/flipcartHome.controls.ts';
import { click } from '../../utils/Commands.ts';

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
        await click(flipcartHomeControls.searchIcon)        
    }        
   }

   export default new FlipkartHomePage();
    

