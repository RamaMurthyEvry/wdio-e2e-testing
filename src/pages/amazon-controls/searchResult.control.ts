import { $ } from '@wdio/globals';
export class SearchResultControl {
    public get searchResults() { return $$("//div[not(.//span[@class=contains(text(), 'Sponsored')])]//span[@class='a-size-medium a-color-base a-text-normal']") }
    public get searchedText() { return $("//*[@id='search']//span[3]") }
    public get minPrice() { return $(`//div/label[@aria-label='Minimum']`) }
    public get maxPrice() { return $(`//div/label[@aria-label='Maximum']`) }
    public get productPrice() { return $$('//a[not(contains(@href, "spon"))]//span[@data-a-size="xl"]//span[@class="a-price-whole"]') }
    public get addToCartBtn() { return $('//input[@id="add-to-cart-button" and @type="submit"]') }
    public get successMsg() { return $('//div[@id="attach-added-to-cart-message"]') }
    public get cartBtn() { return $('//span[@id="attach-sidesheet-view-cart-button"]') }
    public get sortDropDown() { return $$('//*[@class="a-dropdown-container"]//option') }
    public get addTocartOpn() { return $$("//button[text()='Add to cart']") }
    public get multipleResultTitle() { return $$("//h2[contains(@class,'a-size-mini')]") }
    public get searchProductName() { return $$("//span[@class='a-size-medium a-color-base a-text-normal']") }
    public get gridSearchResults() {return $$('//span[@class="a-size-base-plus a-color-base a-text-normal"]')}
    public get cartButton() {{return $('//div[@id="nav-cart-count-container"]')}}
   
}
export default new SearchResultControl();