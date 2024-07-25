import { $ } from '@wdio/globals';

export class AddtoCartControls {
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
        return $("(//select[@class='Gn+jFg'])[1]");
    }
    public get maxPriceFilter() {
        return $("(//select[@class='Gn+jFg'])[2]");
    }
    public get Remove() {
        return $("//div[text()='Remove']");
    }
    public get Removemsg() {
        return $("//*[@id='container']/div/div[1]/div/div[3]/div/div[1]");
    }
    public get addToCartBtn() {
        return $("//*[@class='QqFHMw vslbG+ In9uk2']");
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
        const cartItems = await $$("(//*[@class='eGXlor pk3Guc'])[1]");
        return cartItems.some(async (item) => {
            const name = await item.$("(//*[text()='SAMSUNG Galaxy M34 5G (Waterfall Blue, 128 GB)'])").getText();
            return name === prodName;
        });
    }
}
export default new AddtoCartControls();