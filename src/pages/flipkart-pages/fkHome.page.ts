import { isTextPresentInLocator } from '../../../src/utils/Commands.ts';
import fkHomePageControl from '../flipkart-controls/fkHome.control.ts';

//#region Flipkart Home Page
class fkHomePage {
    
    //#region User Name Verification 
    async verifyFlipKartUserName(login: string) {
        const isPresent = await isTextPresentInLocator(fkHomePageControl.fkLoginUserText, login);
        expect(isPresent).toBe(true);
    }
    //#endregion

    //#region Search For Product
    async fkSearchForProduct(product: string) {
        await (await (fkHomePageControl.fkSearchBox)).waitForDisplayed();
        await (fkHomePageControl.fkSearchBox).setValue(product);
        await (fkHomePageControl.fkSearchIcon).waitForClickable({ timeout: 50000 })
        await fkHomePageControl.fkSearchIcon.click();
    }
    //#endregion
}
//#endregion

export default new fkHomePage();