import { Then } from '@cucumber/cucumber';
import fkAddFiltersPage from '../../../src/pages/flipkart-pages/fkAddFilters.page.ts'

//#region Add Filters Step Definitions

Then(/^Filters for the Brand (.*)$/, async(brand:string) => {
	await fkAddFiltersPage.fkAddBrandFilter(brand);
});

Then(/^Filters for the RAM (.*)$/, async(RAM:string) => {
	await fkAddFiltersPage.fkAddRAMFilters(RAM);
});

Then(/^Verify (.*) and (.*) filtered product added to the cart$/, async(Ram:string, Brand: string) => {
	await fkAddFiltersPage.fkVerifySearchTextBrand(Brand)
	await fkAddFiltersPage.fkVerifySearchTextRAM(Ram);
});

//#endregion