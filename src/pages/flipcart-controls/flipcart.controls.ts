import { $ } from '@wdio/globals'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class FlipcartCartControls{
    /**
     * define selectors using getter methods
     */
    public get removebutton () {
        return $('//div[text()="Remove"]');
    }

    public get confirmRemoveButton () {
        return $('//div[contains(@class,"fF30ZI") and text()="Remove"]');
    }

    public get confirmationMessage () {        
        return $('//div[contains(text(), "Successfully removed ")]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
}

export default new FlipcartCartControls();
