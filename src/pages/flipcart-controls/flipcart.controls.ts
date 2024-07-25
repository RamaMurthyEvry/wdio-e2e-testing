import { $ } from '@wdio/globals'

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

export default new FlipcartCartControls();
