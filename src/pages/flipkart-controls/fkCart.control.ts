import { $ } from '@wdio/globals';

//#region Cart Page Control
export class fkCartPageControl 
{
    public get fkConfirmRemoveButton() { return $ (`//div[@class='gRTtwM f-DWwy']//div[contains(.,'Remove')]`); }
    public get fkRemoveButtonClick () { return $(`//div[@class='gE4Hlh']/following::div[@class="sBxzFz" and contains(.,'Remove')][1]`); }
    public get fkSuccessfullRemovedMsg() { return $ (`//div[@class='eIDgeN' and contains(.,'Successfully removed')]`); }
    public get fkNotifyMessage() { return $ (`//div[@class='eIDgeN' and contains(.,'notify you when this product is back in stock')]`); }
}
//#endregion
export default new fkCartPageControl();