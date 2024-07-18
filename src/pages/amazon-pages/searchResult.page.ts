
import { isTextMatchInLocator } from '../../../src/utils/Commands.ts';
import searchResultControl from "../amazon-controls/searchResult.control.ts";
export class SearchResultPage {
    async verifySearchedText(text: string) {
        const isPresent = await isTextMatchInLocator(searchResultControl.SearchedText, text);
        expect(isPresent).toBe(true);
    }
}

export default new SearchResultPage();