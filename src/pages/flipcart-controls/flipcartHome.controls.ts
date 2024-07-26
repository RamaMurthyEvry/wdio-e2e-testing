import { $ } from '@wdio/globals'

//#region Flipcart-Homepage WebElements

class FlipkartHomeControls {

    public get serchList () {
        return $$('//div[contains(text(),"SAMSUNG")]');
    }
    public get availableProductList () {
        return $$('//div[text()="Only few left"]/ancestor::div[@class="col col-5-12 BfVC2z"]/preceding-sibling::div[@class="col col-7-12"]/div[1]');
    }
    public get availableProduct () {
        return $('(//div[text()="Only few left"]/ancestor::div[contains(@class,"col")]/preceding-sibling::div[contains(@class,"col-7")]/div[1])[1]');
    }            
    public get searchBox () {
        return $('//input[contains(@title,"Search")]');
    }
    public get searchIcon () {
        return $('//button[contains(@title,"Search")]');
    }
    public get drpdownItem_Min () {
        return $('(//select[@class="Gn+jFg"])[1]');
    }
    public get drpdownItem_Max () {
        return $('(//select[@class="Gn+jFg"])[2]');
    }
    
   }
//#endregion

export default new FlipkartHomeControls();
