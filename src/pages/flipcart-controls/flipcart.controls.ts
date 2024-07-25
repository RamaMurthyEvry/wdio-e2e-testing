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
}
//#endregion

export default new FlipcartCartControls();
