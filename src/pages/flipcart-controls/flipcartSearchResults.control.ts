import { $ } from '@wdio/globals'
import { exit, title } from 'process';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FlipcartSearchControls {
    /**
     * define selectors using getter methods
     */
    
    public get serchList () {
        return $$('//div[contains(text(),"SAMSUNG")]');
    }
     
    public get drpdownItem_Min () {
        return $('(//select[@class="Gn+jFg"])[1]');
    }
    public get drpdownItem_Max () {
        return $('(//select[@class="Gn+jFg"])[2]');
    }
    public get addToCart () {
        return $('button.QqFHMw.vslbG+.In9uk2');
    }
   
    public get cartIcon () {
        return $('//div[@class="cjMG1q"]//a');
    }
  
    public get itemsIncart () {
        return $('//div[contains(@class,"ZuSA--")]');
    }

   }


export default new FlipcartSearchControls();
