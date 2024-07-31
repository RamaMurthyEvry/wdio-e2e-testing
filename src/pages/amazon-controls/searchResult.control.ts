import { $ } from '@wdio/globals';
export class SearchResultControl
{
    public get searchResults () { return $$("//div[not(.//span[@class=contains(text(), 'Sponsored')])]//span[@class='a-size-medium a-color-base a-text-normal']") }
    public get searchedText () { return $("//*[@id='search']//span[3]") }
    public get minPrice () { return $(`//div/label[@aria-label='Minimum']`) }
    public get maxPrice () { return $(`//div/label[@aria-label='Maximum']`) }
    public get productPrice() {return $$('//a[not(contains(@href, "spon"))]//span[@data-a-size="xl"]//span[@class="a-price-whole"]')}
    public get addToCartBtn() { return $('//input[@id="add-to-cart-button" and @type="submit"]') }
    public get successMsg() {return $('//div[@id="attach-added-to-cart-message"]')}
    public get cartBtn() {return $('//form[@id="attach-view-cart-button-form"]')}
    public get gridSearchResults() {return $$('//span[@class="a-size-base-plus a-color-base a-text-normal"]')}
    public get sortDropDown() {return $$('//*[@class="a-dropdown-container"]//option')}  
}
export default new SearchResultControl();