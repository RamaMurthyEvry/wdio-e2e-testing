import { $ } from '@wdio/globals'
import flipkartProductDetailsControl from '../flipkart-controls/flipkartProductDetails.control.ts';
import flipcartsearchResultsControl from '../flipkart-controls/flipkartSearchResults.control.ts';
import { click } from '../../utils/Commands.ts';

class FlipkartProductDetailsPage {

    public async switchTonewTab() {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
    }

    public async switchToParentTab() {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[0]);
    }

    public async addProductToCart() {
        this.switchTonewTab()
        await (flipkartProductDetailsControl.addToCart).waitForClickable({ timeout: 10000 });
        await click(flipkartProductDetailsControl.addToCart);
        await browser.pause(10000);
    }

    public async verifyPresenceOfProduct(product: string) {
        const element = await $(`//*[contains(text(), '${product}')]`);
        element.isDisplayed()
    }

    async clickOnShoppingCartButton() {
        await flipcartsearchResultsControl.fkcartBtn.waitForDisplayed({ timeout: 10000 });
        await flipcartsearchResultsControl.fkcartBtn.click()
    }

    //#region verify the CartItem count before and after adding the product to a cart
    public async verifyTheCartItemsCount() {
        //comparing the count of items in cart before and after adding the product to cart
        let itemInCart_before: number = 0;
        let itemInCart_after: number = 0;
        this.switchToParentTab()//switch back to parent tab to get the count of item added
        try {
            //adding try block to handle the exception if the item being added is the first one to be added in the cart            
            await (flipcartsearchResultsControl.itemsIncart).isExisting();
            await (flipcartsearchResultsControl.itemsIncart).waitForDisplayed({ timeout: 10000 });
            const itemText = await (flipcartsearchResultsControl.itemsIncart).getText();
            itemInCart_before = parseInt(itemText, 10);
        }
        catch (error) {
            console.log("No items in the cart yet");
        }
        await browser.refresh()
        const itemCartAfterText = await (flipcartsearchResultsControl.itemsIncart).getText();
        itemInCart_after = parseInt(itemCartAfterText, 10);
        expect(itemInCart_after).toEqual(itemInCart_before + 2);
    }

}

export default new FlipkartProductDetailsPage();
