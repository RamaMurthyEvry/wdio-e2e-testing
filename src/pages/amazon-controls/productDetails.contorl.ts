class ProductDetailsContorl{

    public get productName() {return $('//span[@id="productTitle"]')}
    public get productPrice() {return $('//div[@id="corePriceDisplay_desktop_feature_div"]//*[@class="a-price-whole"]')}
    public get productQty() {return $('//div[@id="quantityLayoutLow_feature_div"]')}

}

export default new ProductDetailsContorl()