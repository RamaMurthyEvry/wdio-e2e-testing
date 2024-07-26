import { $ } from '@wdio/globals';

export class AddItemToCartControls {
    public get searchbox() {
        return $("//input[@name='q']")
    }
    public get searchBtn() {
        return $("//button[@title='Search for Products, Brands and More']//*[name()='svg']")
    }
    public get actualText() {
        return $("//*[@id='container']/div/div[3]/div[1]/div[2]/div[1]/div/div/span/span");
    }
    public get searchResults() {
        return $$("//html");
    }
    public get Filter() {
        return $$("//html");
    }
    public get actualFilterText() {
        return $("//*[@id='container']/div/div[3]/div/div[1]/div/div[1]/div/section[1]/div[2]/div[1]/div/div[2]");
    }
    public get selectProduct() {
        return $("//*[@id='container']/div/div[3]/div/div[2]/div[2]/div/div/div/a/div[2]/div[1]/div[1]");
    }
    
    public get minPriceFilter() {
        return $("(//div[@class='suthUA']//select[@class='Gn+jFg'])[1]");
    }
    public get maxPriceFilter() {
        return $("(//select[@class='Gn+jFg'])[2]");
    }
    public get Remove() {
        return $("//div[normalize-space()='Remove']");
    }
    public get Removemsg() {
        return $(".WGsKhl");
    }
    public get addToCartBtn() {
        return $("//button[@class='QqFHMw vslbG+ In9uk2']");
    }
    public get successMessage() {
        return $("(//*[@class='cthO4-'])[1]");
    }
    public get cartIcon() {
        return $("//*[@id='container']/div/div[1]/div[1]/div[2]/div[6]/div/div/a/span");
    }
    public async findProductInResults(prodName: string) {
        const elements = await this.searchResults;
        const foundProduct = elements.find(async (element) => {
            const text = await element.getText();
            return text.includes(prodName);
        });
        return foundProduct !== undefined;
    }
    public async getProductInCart(prodName: string) {
        const cartItems = await $$(".cart-item");
        return cartItems.find(async (item) => {
            const name = await item.$(".product-name").getText();
            return name === prodName;
        });
    }
    public async isProductInCart(prodName: string) {
        const cartItems = await $$("//a[@class='T2CNXf QqLTQ-']");
        return cartItems.some(async (item) => {
            const name = await item.$("(//*[text()='SAMSUNG Galaxy M34 5G (Waterfall Blue, 128 GB)'])").getText();
            return name === prodName;
        });
    }
    public get selectsaveforlater(){
        return $("//div[normalize-space()='Save for later']");
    }
    public async isProductInSaveforLater(prodName: string){
        const cartItems = await $$("//div[@class='iIUzTJ']");
        return cartItems.some(async (item)=>{
            const name = await item.$("(//*[text()='SAMSUNG Galaxy M34 5G (Waterfall Blue, 128 GB)'])").getText();
            return name == prodName;
        });
    } 
    public get selectmovetocart(){
        return $("//div[normalize-space()='Move to cart']")
    }
}
export default new AddItemToCartControls();

