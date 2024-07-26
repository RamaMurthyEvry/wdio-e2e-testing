class ProductDetailsContorl{

    public get productName() {return $('//span[@id="productTitle"]')}
    public get productPrice() {return $('//span[3]/span[2]/span[2]')}
    public get productQty() {return $('//div[@id="quantityLayoutLow_feature_div"]')}

}

export default new ProductDetailsContorl()