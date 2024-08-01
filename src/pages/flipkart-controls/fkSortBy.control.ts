import { $ } from '@wdio/globals';
//#region Sort By Page Control
export class fkSortByControl {
    public get Popularity() { return $(`//div[@class='zg-M3Z' and contains(.,'Popularity')]`); }
    public get LowtoHigh() { return $(`//div[@class='zg-M3Z' and contains(.,'Price -- Low to High')]`); }
    public get HightoLow() { return $(`//div[@class='zg-M3Z' and contains(.,'Price -- High to Low')]`); }
    public get NewestFirst() { return $(`//div[@class='zg-M3Z' and contains(.,'Newest First')]`); }
//#endregion
}
export default new fkSortByControl();