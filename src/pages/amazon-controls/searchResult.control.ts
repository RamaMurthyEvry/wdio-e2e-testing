import { $ } from '@wdio/globals';
export class SearchResultControl
{
    public get SearchResults () { return $$("//*[@class='a-size-medium a-color-base a-text-normal']") }
    public get SearchedText () { return $("//*[@id='search']//span[3]") }
    public get lowerprice () { return $(`//div/label[@aria-label='Minimum']`) }
    public get highprice () { return $(`//div/label[@aria-label='Maximum']`) }
    
}
export default new SearchResultControl();