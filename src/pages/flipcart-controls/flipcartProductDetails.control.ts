import { $ } from '@wdio/globals'
//#region Flipcart-ProductDetails page WEbElements
class FlipcartProductDetailsControls{
  
    public get addToCart () {
        return $('//button[contains(@class,"QqFHMw") and text()="Add to cart"]');
    }     
}
//#endregion

export default new FlipcartProductDetailsControls();
