import { isTextPresentInLocator } from '../../../src/utils/Commands.ts';
import homePageControl from '../amazon-controls/home.control.ts';
import { setText } from '../../../src/utils/Commands.ts';

class HomePage {

    async verifyUserName(text: string) {
        const isPresent = await isTextPresentInLocator(homePageControl.helloUserText, text);
        expect(isPresent).toBe(true);
    }

    async searchProduct(product: string) {
        await setText(homePageControl.searchInputField, product)
        await homePageControl.searchButton.click();
        await browser.pause(1000);
    }

    async selectMainMenuItems(main_menu: string) {
        await (await homePageControl.menu(main_menu)).click()
    }

    async selectMenuAndSubMenu(category: string, subCategory: string) {
        await (await homePageControl.Filter(category)).moveTo();
        await browser.pause(3000)
        await (await homePageControl.subFilter(subCategory)).click();
        const isPresent = await isTextPresentInLocator(homePageControl.searchDropDown, subCategory);
        expect(isPresent).toBe(true);
    }
}

export default new HomePage();