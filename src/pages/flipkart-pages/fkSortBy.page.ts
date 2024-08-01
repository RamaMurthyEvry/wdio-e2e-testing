import fkSortByControl from '../../pages/flipkart-controls/fkSortBy.control.ts'
// import { isTextMatchInLocator } from '../../utils/Commands.ts';
//#region Flipkart Sort By Page
class fkSortByPage {
    //#region Verify Sort by popularity
    async verifypopularity() {
        await (await (fkSortByControl.Popularity)).waitForClickable();
        (await fkSortByControl.Popularity).click();
        await browser.pause(5000);
    }
    //#endregion

    //#region Verify Sort by Price -- Low to High
    async verifyPriceLowtoHigh(){
        await (await (fkSortByControl.LowtoHigh)).waitForClickable();
        (await fkSortByControl.LowtoHigh).click();
        await browser.pause(5000);
    }
    //#endregion

    //#region Verify Sort by Price -- High to Low
    async verifyPriceHightoLow(){
        await (await (fkSortByControl.HightoLow)).waitForClickable();
        (await fkSortByControl.HightoLow).click();
        await browser.pause(5000);
    }
    //#endregion

    //#region Verify Newest First
    async verifyNewestFirst(){
        await (await (fkSortByControl.NewestFirst)).waitForClickable();
        (await fkSortByControl.NewestFirst).click();
        await browser.pause(5000);
    }
    //#endregion
    
}
//#endregion

export default new fkSortByPage();