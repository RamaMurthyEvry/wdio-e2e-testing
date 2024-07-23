
import cartControlPage from '../amazon-controls/cart.control.ts'

export class cartPage {

    async getProductName() {
        console.log(await cartControlPage.productname.getText())
        let elementName = await cartControlPage.productname.getText();
        return elementName
    }

    async getProductPrice() {
        return await cartControlPage.productprice.getText();
    }

    async getProductQty() {
        return await cartControlPage.productquantity.getText();
    }

    async verifyProductDetails(name: Promise<string>, price: Promise<string>) {
        await expect(this.getProductName()).toEqual(name);
        await expect(this.getProductPrice()).toEqual(price);
    }

    async clickOnDeleteLink() {
        await cartControlPage.deleteProduct.click()
    }

    async verifyItemRemoved() {
       return cartControlPage.itemremovemsg.getText()

    }

    async verifyProductNoLongerListed() {
        return cartControlPage.productNoLongerListed
    }
}
export default new cartPage();