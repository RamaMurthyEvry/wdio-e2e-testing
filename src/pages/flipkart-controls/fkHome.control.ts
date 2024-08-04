import { $ } from '@wdio/globals';

//#region WebElement and Locators
export class fkHomePageControl 
{
    public get fkLoginUserText () { return $(`//a//span[text()='Login']`); }
    public get fkSearchBox () { return $(`//input[contains(@title,'Search')]`);  }
    public get fkSearchIcon() { return $(`//button[@type='submit']`); }
}
//#endregion

export default new fkHomePageControl();