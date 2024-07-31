import { $ } from '@wdio/globals';

//#region Product Details Controls
class fkProductDetailsControls
{
    public get addToCart () { return $(`//button[contains(@class,'QqFHMw') and text()='Add to cart']`); }
    public get notifyMeToCart () { return $(`//button[contains(@class,'QqFHMw') and text()='NOTIFY ME']`); }
}
//#endregion
export default new fkProductDetailsControls();
