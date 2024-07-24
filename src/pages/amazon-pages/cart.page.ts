
import { getAllProductDetails } from '../../utils/Commands.ts';
import cartControlPage from '../amazon-controls/cart.control.ts'

export class cartPage {

    async getProductName() {
        return (await cartControlPage.productNames[0].getText()).substring(0, 50);
    }

    async getProductPrice() {
        return parseInt((await cartControlPage.productprice.getText()).replace(/,/g, ''));
    }

    async verifyProductDetails(name: string, price: number) {
        await expect(await this.getProductName()).toEqual(name);
        await expect(await this.getProductPrice()).toEqual(price);
    }

    async clickOnDeleteLink() {
        await cartControlPage.deleteProduct.click()
    }

    async verifyItemRemoved(name: string) {
        let trimmedName = name.substring(0, 20);
        let fetchedRemovedname = (await cartControlPage.itemremovemsg.getText()).substring(0, 20)
        expect(trimmedName).toEqual(fetchedRemovedname);
    }

    async verifyProductNoLongerListed(name:string) {
        let trimmedName = name.substring(0, 20);
        if(await getAllProductDetails(cartControlPage.productNames,trimmedName))
        {
            throw("Iteam Not Deleted")
        }
    }
}
export default new cartPage();