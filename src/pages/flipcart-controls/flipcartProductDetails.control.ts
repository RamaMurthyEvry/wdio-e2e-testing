import { $ } from '@wdio/globals'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class FlipcartProductDetailsControls{
  
    public get addToCart () {
        return $('//button[contains(@class,"QqFHMw") and text()="Add to cart"]');
    }

     
}

export default new FlipcartProductDetailsControls();
