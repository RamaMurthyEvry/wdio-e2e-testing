import { $ } from '@wdio/globals';
class cartControlPage
{
    public get productname() {return $ ('//span[@class="a-truncate-cut"]')}
    public get productprice() {return $ ('//span[@class="a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold"]')}
    public get productquantity() {return $ ('//span[@id="a-autoid-0-announce"]')}
    public get deleteProduct() {return $ ('input[value="Delete"]')}
    public get itemremovemsg() {return $ ('//h1[normalize-space()="Your Amazon Cart is empty."]')}
    public get productNoLongerListed() {return $('//div[@data-action="delete"]//span[@class="a-size-base"]')}
    
}
export default new cartControlPage();