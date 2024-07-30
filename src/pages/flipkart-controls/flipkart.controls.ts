import { $ } from '@wdio/globals'


class FlipkartCartControls{
   
    public get removebutton () { return $('//div[text()="Remove"]'); }

    public productRemovebutton (product:string) { return $(`//div['Remove']//a[contains(.,'${product}')]`); }

    public get confirmRemoveButton () { return $('//div[contains(@class,"fF30ZI") and text()="Remove"]'); }

    public get confirmationMessage () { return $('//div[contains(text(), "Successfully removed ")]'); } 
}

export default new FlipkartCartControls();
