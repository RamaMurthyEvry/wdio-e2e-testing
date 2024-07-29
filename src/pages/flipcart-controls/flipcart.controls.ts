import { $ } from '@wdio/globals'

//#region Flipcart page WebElelemnts
class FlipcartCartControls{
   
    public get removebutton () {
        return $('//div[text()="Remove"]');
    }

    public get confirmRemoveButton () {
        return $('//div[contains(@class,"fF30ZI") and text()="Remove"]');
    }

    public get confirmationMessage () {        
        return $('//div[contains(text(), "Successfully removed ")]');
    } 
    
    public get outofstockMsg () {
        return $('//div[contains(text(),"This item is currently out of stock")]');
    }

    public get notifymeVerification () {
        return $('//div[contains(text(),"We’ll notify you when this product is back in stock")]');
    }
}
//#endregion

export default new FlipcartCartControls();
