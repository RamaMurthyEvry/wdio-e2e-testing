 import { $ } from '@wdio/globals';
export class FlipkartControls {
   //#region Flipkart Controls
    public get sarchBox() { return $("//input[@name='q']") }
    public get sarchBtn() { return $("//button[@class='MJG8Up']") }
    public get actualText() {return $("//*[@id='container']/div/div[3]/div[1]/div[2]/div[1]/div/div/span/span");}
    public get searchResults() { return $$("//html"); } 
    public get selectProduct() { return $("(//*[text()='SAMSUNG Galaxy M34 5G without charger (Prism Silver, 128 GB)'])[2]"); }
    public get Remove() { return $("//div[text()='Remove']"); }
    public get Removemsg() { return $("(//div[text()='Remove'])[1]"); }
    public get addToCartBtn() { return $("//*[@class='QqFHMw vslbG+ In9uk2']"); }
    public get successMessage() { return $("(//*[@class='cthO4-'])[1]"); }
    public get cartIcon() { return $("//*[text()='Cart']"); }
    public get electronicsSection() { return $("(//*[@class='TSD49J'])[1]"); }
    public get cartItems() { return $$("//div[contains(@class, 'cart-item')]"); }
    public get chooselaptop() { return $("(//*[@class='KzDlHZ'])[1]"); }
    public get saveForLaterButton() { return $("//div[text()='Save for later']"); }
    public get savedItemsList() { return $$("(//*[@class='cPHDOP col-12-12'])[1]"); }
    public get moveToCartButton() { return $("//div[text()='Move to cart']"); }
    //#endregion Flipkart Controls
    //#region Functions
    public async findProductInResults(productName: string) {
        const elements = await this.searchResults;
        const foundProduct = elements.find(async (element) => {
            const text = await element.getText();
            return text.includes(productName);
        });
        return foundProduct !== undefined;
    }
      public async isProductInCart(productName: string) {
        const cartItems = await $$("(//*[@class='eGXlor pk3Guc'])[1]");
        return cartItems.some(async (item) => {
            const name = await item.$("(//*[text()='SAMSUNG Galaxy M34 5G (Waterfall Blue, 128 GB)'])").getText();
            return name === productName;
        });  }
    public async navigateToElectronics() {
        await this.electronicsSection.click();
    }
    public async searchProduct(productName: string) {
        await this.sarchBox.setValue(productName);    
    }  
    public async chooseProduct() {
        await this.sarchBtn.click();
        await this.chooselaptop.click();
    }   
    public async addProductToCart() {
        await this.addToCartBtn.click();
    } 
       //#endregion Functions
  
}
export default new FlipkartControls();