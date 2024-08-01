import { $ } from '@wdio/globals';

//#region Search Result Control
export class fkSearchResultControl 
{
    public get fkSearchedText () { return $(`//div[@id='container']//span[@class='BUOuZu']//span`); }
    public get fkSearchResults () { return $$(`//div//a[@class='wjcEIp']`); }
    public get drpdownItem_Min() { return $(`(//select[@class='Gn+jFg'])[1]`); }
    public get drpdownItem_Max() { return $(`(//select[@class='Gn+jFg'])[2]`); }
    public get fkSearchResultList () { return $$(`//div[@class='KzDlHZ']`); }
    public get fkSearchForProduct2 () { return $(`//input[@name='q']`); }
}
//#endregion

export default new fkSearchResultControl();