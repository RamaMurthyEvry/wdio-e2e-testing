import fkCartPageControl from '../flipkart-controls/fkCart.control.ts';

//#region Flipkart Cart Page
class fkCartPage {

    //#region User Name Verification 
    async fkClickOnRemoveButton() {
        await fkCartPageControl.fkRemoveButtonClick.scrollIntoView();
        await (fkCartPageControl.fkRemoveButtonClick).waitForClickable({ timeout: 10000 });
        await fkCartPageControl.fkRemoveButtonClick.click();
        await browser.pause(5000);
        await fkCartPageControl.fkConfirmRemoveButton.waitForClickable();
        await fkCartPageControl.fkConfirmRemoveButton.click();
    }
    //#endregion

    //#region Successfully Removed Message Verification 
    async fkVerifySuccessfullyRemovedMsg(message: string) {
        const RemovedSuccessMessage = await fkCartPageControl.fkSuccessfullRemovedMsg.getText();
        expect(RemovedSuccessMessage.includes(message)).toBePresent;
    }
    //#endregion

    //#region Notify Me Message Verification 
    async fkNotifyMeMessage(message: string) {
        const NotifyMeMessage = await fkCartPageControl.fkNotifyMessage.getText();
        expect(NotifyMeMessage.includes(message)).toBePresent;
    }
    //#endregion

}
//#endregion

export default new fkCartPage();