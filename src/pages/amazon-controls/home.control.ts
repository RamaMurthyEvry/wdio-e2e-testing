import { $ } from '@wdio/globals';
export class HomePageControl
{
    public get helloUserText () { return $("//span[@id='nav-link-accountList-nav-line-1']") }
    public get searchInputField(){ return $("//input[@id='twotabsearchtextbox']") }
    public get searchButton(){ return $("//input[@id='nav-search-submit-button']") }

    public get electronicMenu() { return $("//a[normalize-space()='Electronics']")}
    public get laptopandAccessoriesmenu() {return $("//span[normalize-space()='Laptops & Accessories']")}
    public get laptops() {return $('//span[@dir="auto"][text()="Laptops"]')}
    public get brands() {return $('//div[@class="a-column a-span12 apb-browse-left-nav apb-browse-col-pad-right"]//div[5]')}
    public get hpLaptop() {return $('//span[@class="a-size-base a-color-base"][normalize-space()="HP"]')}
  
}
export default new HomePageControl();