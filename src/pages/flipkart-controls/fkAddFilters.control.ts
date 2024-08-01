import { $ } from '@wdio/globals';
//#region AddFilters Page Control
export class fkAddFiltersControl {
    public BrandCheckBox() { return $(`//div[@title='SAMSUNG']//div[@class='XqNaEv']`); }
    public RAMCheckBox() { return $(`//div[@class='_6i1qKy'][normalize-space()='6 GB']`); }
    public get SearchTextBrand() { return $(`//div[@class='gE4Hlh' and contains(.,'SAMSUNG')]`); }
    public get SearchTextRAM() { return $(`//div[@class='qmkQop' and contains(.,'GB RAM')]`); }
//#endregion
}
export default new fkAddFiltersControl();