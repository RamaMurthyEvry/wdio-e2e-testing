import { $ } from '@wdio/globals';
//#region Web elements to find the searchproduct scenario
export class SearchProductControls {
    public get InputField() {
        return $("input[name='q']")
    }
    public get SearchButton() {
        return $("//button[@type='submit']")
    }
    public get SearchResult() {
        return $("//span[@class='BUOuZu']")
    }
    public get productfound() {
        return $("div[data-id='MOBGRTUHPZZYJYFR'] div[class='KzDlHZ']")
    }
}
//#endregion
export default new SearchProductControls();