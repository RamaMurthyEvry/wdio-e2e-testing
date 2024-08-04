import { $ } from '@wdio/globals';

//#region WebElement and Locators
export class fkSortByControl {
    public get popularity() { return $(`//div[@class='zg-M3Z' and contains(.,'Popularity')]`); }
    public get lowToHigh() { return $(`//div[@class='zg-M3Z' and contains(.,'Price -- Low to High')]`); }
    public get highToLow() { return $(`//div[@class='zg-M3Z' and contains(.,'Price -- High to Low')]`); }
    public get newestFirst() { return $(`//div[@class='zg-M3Z' and contains(.,'Newest First')]`); }
}
//#endregion

export default new fkSortByControl();