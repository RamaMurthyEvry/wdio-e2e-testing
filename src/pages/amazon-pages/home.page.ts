import {isTextPresentInLocator} from '../../../src/utils/Commands.ts';
import  HomePageControl  from '../amazon-controls/home.control.ts';
import {setText} from '../../../src/utils/Commands.ts';
class HomePage{

   async verifyUserName (text:string)
    {
       const isPresent = await isTextPresentInLocator(HomePageControl.helloUserText,text);
       expect(isPresent).toBe(true);
    }

    searchProduct(product:string)
    {
    setText(HomePageControl.searchinputfield,product)
	HomePageControl.searchButton.click();
	browser.pause(20000);
    }

}
export default new HomePage();