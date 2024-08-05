import fkSearchResultControl from '../flipkart-controls/fkSearchResult.control.ts';
import fkProductDetailsControl from '../flipkart-controls/fkProductDetails.control.ts';

//#region Product Details Page
class fkProductDetailsPage {

/// <summary>
/// Function to Search Product And Click link
///<para> </para>
/// </summary>
    async fkSearchProductClick() {
        await fkSearchResultControl.fkSearchResultList[0].click();
        const window = await browser.getWindowHandles();
        console.log(`window handle: ${window}`);
        await browser.pause(3000);
        await browser.switchToWindow(window[1]);
        await browser.pause(3000);
    }

/// <summary>
/// Function to Add Product To Cart
///<para> </para>
/// </summary>
    async fkAddProductToCart() {
        await browser.pause(5000);
        await fkProductDetailsControl.addToCart.scrollIntoView();
        await (fkProductDetailsControl.addToCart).waitForClickable({ timeout: 10000 });
        (await fkProductDetailsControl.addToCart).click();
        await browser.pause(10000);
    }

/// <summary>
/// Function to Switch to Window
///<para> </para>
/// </summary>
    async fkSwitchWindow() {
        const window = await browser.getWindowHandles();
        console.log(`window handle: ${window}`);
        await browser.pause(3000);
        await browser.switchToWindow(window[2]);
    }
   
}
//#endregion

export default new fkProductDetailsPage();