import { $ } from '@wdio/globals';
//#region Move a product to the cart
export class MovetoCartControls {
    public get InputField() {
        return $("input[name='q']")
    }
    public get SearchButton() {
        return $("//button[@type='submit']")
    }
    public get Minprice() {
        return $("(//select[@class='Gn+jFg'])[1]")
    }
    public get MaxPrice() {
        return $("(//select[@class='Gn+jFg'])[2]")
    }
    public get product() {
        return $("div[data-id='MOBGRTUHPZZYJYFR'] div[class='KzDlHZ']")

    } public get addtocart() {
        return $("//*[@class='QqFHMw vslbG+ In9uk2']")
    }
    public get productincart() {
        return $("//a[contains(text(),'SAMSUNG Galaxy M34 5G without charger (Midnight Bl')]")
    }
    public get saveforlater(){
        return $("//div[@class='cPHDOP col-12-12']//div[3]//div[2]//div[1]")
    }
    public get movetocart(){
        return $("//div[@class='z1ALT8']//div[2]//div[3]//div[1]//div[2]//div[2]//div[1]")
    }
}
//#endregion
export default new MovetoCartControls();