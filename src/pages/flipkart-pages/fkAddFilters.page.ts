import fkAddFiltersControl from '../../pages/flipkart-controls/fkAddFilters.control.ts'
import { isTextPresentInLocator } from '../../../src/utils/Commands.ts';
//#region Flipkart AddFilters Page
class fkAddFiltersPage {
    //#region Apply filter for Brand
    async fkAddBrandFilter(brand: string) {
        await fkAddFiltersControl.BrandCheckBox().scrollIntoView();
        await fkAddFiltersControl.BrandCheckBox().waitForClickable({ timeout: 10000 });
        await fkAddFiltersControl.BrandCheckBox().click();
        console.log(brand);
        await browser.pause(10000);
    }
    //#endregion

    //#region Apply filter for RAM
    async fkAddRAMFilters(RAM: string) {
        await fkAddFiltersControl.RAMCheckBox().scrollIntoView();
        await fkAddFiltersControl.RAMCheckBox().waitForClickable({ timeout: 10000 });
        (await fkAddFiltersControl.RAMCheckBox()).click();
        console.log(RAM)
        await browser.pause(10000);
    }
    //#endregion

    //#region Verify the Brand filter applied
    async fkVerifySearchTextBrand(text: string) {
        const isPresent = await isTextPresentInLocator(fkAddFiltersControl.SearchTextBrand, text);
        expect(isPresent).toBe(true);
    }
    //#endregion

    //#region Verify the RAM filter applied
    async fkVerifySearchTextRAM(text: string) {
        const isPresent = await isTextPresentInLocator(fkAddFiltersControl.SearchTextRAM, text);
        expect(isPresent).toBe(true);
    }
    //#endregion
    
}
//#endregion

export default new fkAddFiltersPage();