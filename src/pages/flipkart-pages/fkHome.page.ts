import { isTextPresentInLocator } from '../../../src/utils/Commands.ts';
import fkHomePageControl from '../flipkart-controls/fkHome.control.ts';

//#region Flipkart Home Page
class fkHomePage {
    
    //#region User Name Verification 
    async verifyFlipKartUserName(login: string) {
        const isPresent = await isTextPresentInLocator(fkHomePageControl.loginUserText, login);
        expect(isPresent).toBe(true);
    }
    //#endregion

    //#region Search For Product
    async fkSearchForProduct(product: string) {
        await (await (fkHomePageControl.searchBox)).waitForDisplayed();
        await (fkHomePageControl.searchBox).setValue(product);
        await (fkHomePageControl.searchIcon).waitForClickable({ timeout: 50000 })
        await fkHomePageControl.searchIcon.click();
    }
    //#endregion
}
//#endregion

export default new fkHomePage();