
import searchResultControl from '../amazon-controls/searchResult.control.ts';
import productDetailsContorl from '../amazon-controls/productDetails.contorl.ts'
import cartControlPage from '../amazon-controls/cart.control.ts'

export class cartPage {

    async getProductName() {
        return cartControlPage.productName.getText(); 
    }

    async getProductPrice() {
   
    }

    async getProductQty() {

    }

    async verifyProductDetails(name:Promise<string>,price:Promise<string>,qty:Promise<string>){
        expect(this.getProductName()).toEqual(name);
        expect(this.getProductPrice()).toEqual(price);
        expect(this.getProductQty()).toEqual(qty);
    }

    async clickOnDeleteLink() {
        await searchResultControl.deleteProduct().click()
    }

    async getItemRemval() {

        console.log(searchResultControl.itemremovemsg)
        return searchResultControl.itemremovemsg

    }

    async verifyProductNoLongerListed() {
        return searchResultControl.productNoLongerListed
    }
}
export default new cartPage();