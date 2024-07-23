class ProductDetailsContorl{

    public get productName() {return $('//span[@id="productTitle"]')}
    public get productPrice() {return $('//span[normalize-space()="14,999"]')}
    public get productQty() {return $('//div[@id="quantityLayoutLow_feature_div"]')}

}

export default new ProductDetailsContorl()