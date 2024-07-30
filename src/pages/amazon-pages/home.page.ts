import {isTextPresentInLocator} from '../../../src/utils/Commands.ts';
import  HomePageControl  from '../amazon-controls/home.control.ts';
import {setText} from '../../../src/utils/Commands.ts';
class HomePage{

   async verifyUserName (text:string)
    {
       const isPresent = await isTextPresentInLocator(HomePageControl.helloUserText,text);
       expect(isPresent).toBe(true);
    }

   async searchProduct(product:string)
    {
    await setText(HomePageControl.searchInputField,product)
	await HomePageControl.searchButton.click();
	await browser.pause(1000);
    }

    async clickOnElectronic(){
        await HomePageControl.electronicMenu.click();
    }

    async clickOnLaptopAndAccesories(submenu:string){
        (await HomePageControl.laptopandAccessoriesmenu).click()
    }

    async selectLaptopFromCatagory(catagory:string){
        (await HomePageControl.laptops).click()
    }

    async verifyBrands(){
        await HomePageControl.brands.getText()
    }

    async selectBrand(brand:string){
        if(brand=="HP"){
        await HomePageControl.hpLaptop.scrollIntoView();
        await HomePageControl.hpLaptop.click()
        }
    }



}
export default new HomePage();