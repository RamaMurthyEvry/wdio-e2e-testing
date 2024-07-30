import { $ } from '@wdio/globals';

//#region Search Result Control
export class fkSearchResultControl 
{
    public get fkSearchedText () { return $(`//div[@id='container']//span[@class='BUOuZu']//span`); }
    public get fkSearchResults () { return $$(`//div//a[@class='wjcEIp']`); }
}
//#endregion

export default new fkSearchResultControl();