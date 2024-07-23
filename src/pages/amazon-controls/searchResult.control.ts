import { $ } from '@wdio/globals';
export class SearchResultControl
{
    public get SearchResults () { return $$("//div[not(.//span[@class=contains(text(), 'Sponsored')])]//span[@class='a-size-medium a-color-base a-text-normal']") }
    public get SearchedText () { return $("//*[@id='search']//span[3]") }
    public get lowerprice () { return $(`//div/label[@aria-label='Minimum']`) }
    public get highprice () { return $(`//div/label[@aria-label='Maximum']`) }
    public get productPrice() {return $$('//span[@class="a-price-whole"]')}
    
    public productClick() {return $('//div[@class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_3"]//span[@class="a-size-medium a-color-base a-text-normal"][contains(text(),"Samsung Galaxy M34 5G (Midnight Blue,6GB,128GB)|12")]')}
    public addtocart() { return $('//input[@id="add-to-cart-button" and @type="submit"]') }
    public successMsg() {return $('//div[@id="attach-added-to-cart-message"]')}
    public cartbtn() {return $('//form[@id="attach-view-cart-button-form"]')}
    public productname() {return $ ('//span[@class="a-truncate-cut"]')}
    public productprice() {return $ ('//span[@class="a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold"]')}
    public productquantity() {return $ ('//span[@id="a-autoid-0-announce"]')}
    public deleteProduct() {return $ ('input[value="Delete"]')}
    public itemremovemsg() {return $ ('//h1[normalize-space()="Your Amazon Cart is empty."]')}
    public productNoLongerListed() {return $('//div[@data-action="delete"]//span[@class="a-size-base"]')}
    
}
export default new SearchResultControl();