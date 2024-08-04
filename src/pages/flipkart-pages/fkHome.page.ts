import { isTextPresentInLocator } from '../../../src/utils/Commands.ts';
import fkHomePageControl from '../flipkart-controls/fkHome.control.ts';

//#region Flipkart Home Page
class fkHomePage {    

/// <summary>
/// Function to Verify User Name  
///<para> {string} login - The username to verify.</para>
/// </summary>
    async verifyFlipKartUserName(login: string) {
        const isPresent = await isTextPresentInLocator(fkHomePageControl.fkLoginUserText, login);
        expect(isPresent).toBe(true);
    }
    
/// <summary>
/// Function to Search For Product 
///<para>{string} product - The product name to search for. </para>
/// </summary>    
    async fkSearchForProduct(product: string) {
        await (await (fkHomePageControl.fkSearchBox)).waitForDisplayed();
        await (fkHomePageControl.fkSearchBox).setValue(product);
        await (fkHomePageControl.fkSearchIcon).waitForClickable({ timeout: 50000 })
        await fkHomePageControl.fkSearchIcon.click();
    }
    
}
//#endregion

export default new fkHomePage();