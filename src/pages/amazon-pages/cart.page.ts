
import { click, isTextPresentInLocator } from '../../../src/utils/Commands.ts';
import { isTextMatchInLocator, getAllProductDetails } from '../../../src/utils/Commands.ts';
import searchResultControl from '../amazon-controls/searchResult.control.ts';
import productDetailsContorl from '../amazon-controls/productDetails.contorl.ts'

export class cartPage {

    async getProductName() {
        console.log(searchResultControl.productname)
        const Name = await productDetailsContorl.productName
        await expect (Name).toHaveText('Samsung Galaxy M34 5G (Midnight Blue,6GB,128GB)|120Hz sAMOLED Display') 
    }

    async getProductPrice() {
        console.log(searchResultControl.productprice)
        const Price = await productDetailsContorl.productPrice
        await expect(Price).toHaveValue('14,999')
    }

    async getProductQty() {

        console.log(searchResultControl.productquantity)
        const Quantity = await productDetailsContorl.productQty
        await expect(Quantity).toHaveText('1')
    }

    async verifyProductDetails(){
        this.getProductName()
        this.getProductPrice()
        this.getProductQty()
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