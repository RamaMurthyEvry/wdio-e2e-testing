import fkSearchResultControl from '../flipkart-controls/fkSearchResult.control.ts';
import fkProductDetailsControl from '../flipkart-controls/fkProductDetails.control.ts';

//#region Product Details Page
class fkProductDetailsPage {

    //#region Search Product And Click link
    async fkSearchProductClick() {
        await fkSearchResultControl.fkSearchResultList[0].click();
        const window = await browser.getWindowHandles();
        console.log(`window handle: ${window}`);
        await browser.pause(3000);
        await browser.switchToWindow(window[1]);
    }
    //#endregion

    //#region Add Product To Cart
    async fkAddProductToCart() {
        await fkProductDetailsControl.addToCart.scrollIntoView();
        await (fkProductDetailsControl.addToCart).waitForClickable({ timeout: 10000 });
        (await fkProductDetailsControl.addToCart).click();
        await browser.pause(10000);
    }
    //#endregion

    //#region Click Notifiy Me Product To Cart
    async fkNotifyProductToCart() {
        await fkProductDetailsControl.notifyMeToCart.scrollIntoView();
        await (fkProductDetailsControl.notifyMeToCart).waitForClickable({ timeout: 10000 });
        (await fkProductDetailsControl.notifyMeToCart).click();
        await browser.pause(10000);
    }
    //#endregion

}
//#endregion
export default new fkProductDetailsPage();