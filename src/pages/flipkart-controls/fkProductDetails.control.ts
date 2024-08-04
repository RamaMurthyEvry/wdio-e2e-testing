import { $ } from '@wdio/globals';

//#region WebElement and Locators
class fkProductDetailsControls
{
    public get addToCart () { return $(`//button[contains(@class,'QqFHMw') and text()='Add to cart']`); }
}
//#endregion

export default new fkProductDetailsControls();
