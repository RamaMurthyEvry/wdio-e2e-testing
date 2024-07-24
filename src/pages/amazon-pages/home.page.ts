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

}
export default new HomePage();