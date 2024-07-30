import { $ } from '@wdio/globals'

class FlipkartProductDetailsControls{
  
    public get addToCart () { return $('//button[contains(@class,"QqFHMw") and text()="Add to cart"]'); }

    public get searchForProduct () { return $("//input[@name='q']"); }
    
    public get fkSearchButton() { return $(`//button[@type='submit']`); }
}


export default new FlipkartProductDetailsControls();
