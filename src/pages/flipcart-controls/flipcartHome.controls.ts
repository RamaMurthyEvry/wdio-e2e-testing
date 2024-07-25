import { $ } from '@wdio/globals'
import { exit, title } from 'process';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FlipkartHomeControls {
    /**
     * define selectors using getter methods
     */
    
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
   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
   
   }

    

    /**
     * overwrite specific options to adapt it to page object
     */
    // public open () {
    //     return super.open('login');
    // }


export default new FlipkartHomeControls();
