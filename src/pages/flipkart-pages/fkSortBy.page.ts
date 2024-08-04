import fkSortByControl from '../../pages/flipkart-controls/fkSortBy.control.ts'

//#region Flipkart Sort By Page
class fkSortByPage {
   
/// <summary>
/// Function to Verify Sort by popularity
///<para> </para>
/// </summary>
    async verifypopularity() {
        await (await (fkSortByControl.popularity)).waitForClickable();
        (await fkSortByControl.popularity).click();
        await browser.pause(5000);
    }

/// <summary>
/// Function to Verify Sort by Price -- Low to High
///<para> </para>
/// </summary>
    async verifyPriceLowtoHigh(){
        await (await (fkSortByControl.lowToHigh)).waitForClickable();
        (await fkSortByControl.lowToHigh).click();
        await browser.pause(5000);
    }

/// <summary>
/// Function to CVerify Sort by Price -- High to Low
///<para> </para>
/// </summary>
    async verifyPriceHightoLow(){
        await (await (fkSortByControl.highToLow)).waitForClickable();
        (await fkSortByControl.highToLow).click();
        await browser.pause(5000);
    }

/// <summary>
/// Function to Verify Newest First
///<para> </para>
/// </summary>
    async verifyNewestFirst(){
        await (await (fkSortByControl.newestFirst)).waitForClickable();
        (await fkSortByControl.newestFirst).click();
        await browser.pause(5000);
    }
}
//#endregion

export default new fkSortByPage();