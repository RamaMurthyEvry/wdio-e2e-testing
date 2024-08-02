import { $ } from '@wdio/globals';
export class fkHPControls {
   //#region fkHPControls
    public get searchResults() { return $$("//div//a[@class='T2CNXf QqLTQ-']"); } 
    public get chooselaptop() { return $("(//*[@class='KzDlHZ'])[1]"); }
    public get saveForLaterButton() { return $("//div[text()='Save for later']"); }
    public get savedItemsList() { return $$("(//*[@class='cPHDOP col-12-12'])[1]"); }
    public get moveToCartButton() { return $("//div[text()='Move to cart']"); }
//#endregion fkfkHPControls
}
export default new fkHPControls();