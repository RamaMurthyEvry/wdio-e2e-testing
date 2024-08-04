import fkAddFiltersControl from '../../pages/flipkart-controls/fkAddFilters.control.ts'
import { isTextPresentInLocator } from '../../../src/utils/Commands.ts';

//#region Flipkart AddFilters Page
class fkAddFiltersPage {

/// <summary>
/// Function to Add Brand Filter
///<para>{string} brand - The brand name to filter by </para>
/// </summary>
    async fkAddBrandFilter(brand: string) {
        await fkAddFiltersControl.BrandCheckBox().scrollIntoView();
        await fkAddFiltersControl.BrandCheckBox().waitForClickable({ timeout: 10000 });
        await fkAddFiltersControl.BrandCheckBox().click();
        console.log(brand);
        await browser.pause(10000);
    }
  
/// <summary>
/// Function to Add RAM filter on the Flipkart site
///<para>{string} RAM - The RAM specification to filter by.</para>
/// </summary>
    async fkAddRAMFilters(RAM: string) {
        await fkAddFiltersControl.RAMCheckBox().scrollIntoView();
        await fkAddFiltersControl.RAMCheckBox().waitForClickable({ timeout: 10000 });
        (await fkAddFiltersControl.RAMCheckBox()).click();
        console.log(RAM)
        await browser.pause(10000);
    }
 

/// <summary>
/// Function to Verify the Search Text Brand
///<para>{string} text - The text to verify in the search results. </para>
/// </summary>
    async fkVerifySearchTextBrand(text: string) {
        const isPresent = await isTextPresentInLocator(fkAddFiltersControl.SearchTextBrand, text);
        expect(isPresent).toBe(true);
    }

/// <summary>
/// Function to Verify the Search Text Ram
///<para>{string} text -The text to verify in the search results.</para>
/// </summary>
    async fkVerifySearchTextRAM(text: string) {
        const isPresent = await isTextPresentInLocator(fkAddFiltersControl.SearchTextRAM, text);
        expect(isPresent).toBe(true);
    }
    
}
//#endregion

export default new fkAddFiltersPage();