import fkCartPageControl from '../flipkart-controls/fkCart.control.ts';

//#region Flipkart Cart Page
class fkCartPage {

/// <summary>
/// Function to Click on Remove button
///<para> </para>
/// </summary>
    async fkClickOnRemoveButton() {
        await fkCartPageControl.fkRemoveButtonClick.scrollIntoView();
        await (fkCartPageControl.fkRemoveButtonClick).waitForClickable({ timeout: 10000 });
        await fkCartPageControl.fkRemoveButtonClick.click();
        await browser.pause(5000);
        await fkCartPageControl.fkConfirmRemoveButton.waitForClickable();
        await fkCartPageControl.fkConfirmRemoveButton.click();
    } 

/// <summary>
/// Function to Verify Successfully Removed Msg
///para>{string} message -The message to verify in the search results.</para>
/// </summary>
    async fkVerifySuccessfullyRemovedMsg(message: string) {
        const RemovedSuccessMessage = await fkCartPageControl.fkSuccessfullRemovedMsg.getText();
        expect(RemovedSuccessMessage.includes(message)).toBePresent;
    }   
}
//#endregion

export default new fkCartPage();