import { $ } from '@wdio/globals';

//#region Home Page Control
export class fkHomePageControl 
{
    public get loginUserText () { return $(`//a//span[text()='Login']`); }
    public get searchBox () { return $(`//input[contains(@title,'Search')]`);  }
    public get searchIcon () { return $(`//button[contains(@title,'Search')]`); }
    public get searchBtn() { return $("//button[@class='MJG8Up']") }

}
//#endregion
export default new fkHomePageControl();