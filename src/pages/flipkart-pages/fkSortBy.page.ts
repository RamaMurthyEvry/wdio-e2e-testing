import fkSortByControl from '../../pages/flipkart-controls/fkSortBy.control.ts'
// import { isTextMatchInLocator } from '../../utils/Commands.ts';
//#region Flipkart Sort By Page
class fkSortByPage {
    //#region Verify Sort by popularity
    async verifypopularity() {
        await (await (fkSortByControl.popularity)).waitForClickable();
        (await fkSortByControl.popularity).click();
        await browser.pause(5000);
    }
    //#endregion

    //#region Verify Sort by Price -- Low to High
    async verifyPriceLowtoHigh(){
        await (await (fkSortByControl.lowToHigh)).waitForClickable();
        (await fkSortByControl.lowToHigh).click();
        await browser.pause(5000);
    }
    //#endregion

    //#region Verify Sort by Price -- High to Low
    async verifyPriceHightoLow(){
        await (await (fkSortByControl.highToLow)).waitForClickable();
        (await fkSortByControl.highToLow).click();
        await browser.pause(5000);
    }
    //#endregion

    //#region Verify Newest First
    async verifyNewestFirst(){
        await (await (fkSortByControl.newestFirst)).waitForClickable();
        (await fkSortByControl.newestFirst).click();
        await browser.pause(5000);
    }
    //#endregion

}
//#endregion

export default new fkSortByPage();