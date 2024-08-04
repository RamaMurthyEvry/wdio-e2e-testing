import { $ } from '@wdio/globals';
export class HomePageControl {
    public get helloUserText() { return $("//span[@id='nav-link-accountList-nav-line-1']") }
    public get searchInputField() { return $("//input[@id='twotabsearchtextbox']") }
    public get searchButton() { return $("//input[@id='nav-search-submit-button']") }
    public get searchDropDown() { return $("//div[@id='nav-search-dropdown-card']//span[@id='nav-search-label-id']") }
    public async menu(text: string) { return await browser.$(`//div[@id='nav-xshop-container']//a[contains(text(),'${text}')]`); }
    public async Filter(category: string) { return await browser.$(`//span[contains(text(),'${category}')]`); }
    public async subFilter(subCategory: string) { return await browser.$(`//div[@class='mega-menu']//h3[text()='${subCategory}'] | //div[@class='mega-menu']//h3//a[text()='${subCategory}']`); }
}
export default new HomePageControl();