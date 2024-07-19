import { $ } from '@wdio/globals';
class CartControl {
    public productClick() { return $(`//span[@data-component-type="s-search-results"]/descendant::span[contains(.,'Redmi 13 5G, Hawaiian Blue, 6GB+128GB')][1]`) }
    public addtocart() { return $('//input[@id="add-to-cart-button" and @type="submit"]') }
}

export default new CartControl();