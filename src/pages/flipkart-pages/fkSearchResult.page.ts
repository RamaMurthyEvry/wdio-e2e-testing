import { isTextMatchInLocator, getAllProductDetails } from '../../../src/utils/Commands.ts';
import fkSearchResultControl from "../flipkart-controls/fkSearchResult.control.ts";

//#region Flipkart Search Result
export class SearchResultPage {

    //#region Verify Searched Text
    async fkVerifySearchedText(text: string) {
        const isPresent = await isTextMatchInLocator(fkSearchResultControl.fkSearchedText, text);
        expect(isPresent).toBe(true);
    }
    //#endregion

    //#region Verify Product In Search Result 
    async fkVerifyProductInSearchResult(product: string) {
        const isProductNamePresent = await getAllProductDetails(fkSearchResultControl.fkSearchResults, product);
        expect(isProductNamePresent).toBe(true);
    }
    //#endregion
}
//#endregion

export default new SearchResultPage();