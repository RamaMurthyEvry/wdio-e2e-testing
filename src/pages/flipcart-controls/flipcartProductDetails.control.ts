import { $ } from '@wdio/globals'

//#region Flipcart-ProductDetails page WEbElements

class FlipcartProductDetailsControls{
  
    public get addToCart () {
        return $('//button[contains(@class,"QqFHMw") and text()="Add to cart"]');        
    }    
    
    public get notifymeBtn () {
        return $('//button[contains(text(),"NOTIFY ME")]');
    }  
    
}
//#endregion

export default new FlipcartProductDetailsControls();
