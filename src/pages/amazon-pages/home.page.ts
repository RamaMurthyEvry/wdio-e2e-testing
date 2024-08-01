import { isTextPresentInLocator } from '../../../src/utils/Commands.ts';
import HomePageControl from '../amazon-controls/home.control.ts';
import { setText } from '../../../src/utils/Commands.ts';

class HomePage {

    async verifyUserName(text: string) {
        const isPresent = await isTextPresentInLocator(HomePageControl.helloUserText, text);
        expect(isPresent).toBe(true);
    }

    async searchProduct(product: string) {
        await setText(HomePageControl.searchInputField, product)
        await HomePageControl.searchButton.click();
        await browser.pause(1000);
    }

    async selectMainMenuItems(main_menu: string) {
        await browser.$(`//div[@id='nav-xshop-container']//a[contains(text(),'${main_menu}')]`).click();
    }

    async selectMenuAndSubMenu(category: string, subCategory: string) {
        await browser.$(`//span[contains(text(),'${category}')]`).moveTo();
        await browser.pause(3000)
        const subMenuOptions = await browser.$(`//div[@class='mega-menu']//h3[text()='${subCategory}'] | //div[@class='mega-menu']//h3//a[text()='${subCategory}']`)
        await browser.$(subMenuOptions).click()
        const isPresent = await isTextPresentInLocator(HomePageControl.searchDropdown, subCategory);
        expect(isPresent).toBe(true);
    }
}

export default new HomePage();