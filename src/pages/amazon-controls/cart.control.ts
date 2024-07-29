import { $ } from '@wdio/globals';
class CartControlPage
{
    public get productNames() {return $$ ('//span[@class="a-truncate-cut"]')}
    public get productprice() {return $ ('//span[@class="a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold"]')}
    public get productQty() {return $ ('//span[@id="a-autoid-0-announce"]')}
    public get deleteProduct() {return $ ('input[value="Delete"]')}
    public get itemRemovedMsg() {return $ ('//*[@class="a-link-normal sc-product-link"]')}
    public get productNoLongerListedMsg() {return $('//div[@data-action="delete"]//span[@class="a-size-base"]')}

    public get saveForLaterlink() {return $('//*[@value="Save for later"]')}
    public get savedForLaterItem() {return $$('//div[@id="sc-saved-cart"]//*[@class="a-truncate-full"]')}
    public get moveToCartLink() {return $('//*[@value="Move to cart"]')}
    public get cartItem() {return $$('//div[@class="sc-item-content-group"]//*[@class="a-truncate-full"]')}
    public get itemMovedToCart() {return $('//div[@data-asin="B09R1MMMTH"]//span[text()=" has been moved to Shopping Cart. "]')}
    
}
export default new CartControlPage();