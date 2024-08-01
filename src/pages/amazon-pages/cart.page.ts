
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
        let fetchedRemovedname = (await cartControlPage.itemRemovedMsg.getText()).substring(0, 20)
        expect(trimmedName).toEqual(fetchedRemovedname);
    }

    async verifyProductNoLongerListed(name:string) {
        let trimmedName = name.substring(0, 20);
        if(await getAllProductDetails(cartControlPage.productNames,trimmedName))
        {
            throw("Iteam Not Deleted")
        }
    }
    
    async clickOnSaveForLater(){
        await (await cartControlPage.saveForLaterlink).scrollIntoView()
        await cartControlPage.saveForLaterlink.click()  
    }

    async verifysavedForLaterItem(productname:string){
        if(await getAllProductDetails(cartControlPage.savedForLaterItem, productname)){
            console.log("Item moved to saved for Later")
        }
        else{
            throw("Item not found in saved for Later")
        }
    }

    async clickOnMoveToCart(){
        await cartControlPage.moveToCartLink.scrollIntoView()
        await cartControlPage.moveToCartLink.click()
    }

    async verifyCartItem(productname:string){
        await (await cartControlPage.moveToCartLink).scrollIntoView()
        if(await getAllProductDetails(cartControlPage.cartItem, productname)){
            console.log("Item moved to cart succesfully")
        }
        else{
            throw("Item not moved to cart from save for later")
        }
    }
    
    async verifyItemInSaveForLater(productname:string){
    {
            if(!(await getAllProductDetails(cartControlPage.savedForLaterItem, productname))){
                console.log("Item is not present in saved for Later")
            }
            else{
                throw("Item is found in saved for Later")
            }
        }
    }
}
export default new cartPage();