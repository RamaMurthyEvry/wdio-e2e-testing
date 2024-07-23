
import cartControlPage from '../amazon-controls/cart.control.ts'

export class cartPage {

    async getProductName() {
        console.log(await cartControlPage.productname.getText())
        return (await cartControlPage.productname.getText()).substring(0, 50);
        
    }

    async getProductPrice() {
        return parseInt((await cartControlPage.productprice.getText()).replace(/,/g, ''));
        
    }

    async getProductQty() {
        return await cartControlPage.productquantity.getText();

    }

    async verifyProductDetails(name: string, price: number) {
        await expect(await this.getProductName()).toEqual(name);
        console.log(await this.getProductPrice()+ " " +price);
        await expect(await this.getProductPrice()).toEqual(price);

    }

    async clickOnDeleteLink() {
        await cartControlPage.deleteProduct.click()
    }

    async getItemRemval() {

        console.log(cartControlPage.itemremovemsg)
        return cartControlPage.itemremovemsg

    }

    async verifyProductNoLongerListed() {
        return cartControlPage.productNoLongerListed
    }
}
export default new cartPage();