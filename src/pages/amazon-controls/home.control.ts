import { $ } from '@wdio/globals';
export class HomePageControl
{
    public get helloUserText () { return $("//span[@id='nav-link-accountList-nav-line-1']") }
    public get searchInputField(){ return $("//input[@id='twotabsearchtextbox']") }
    public get searchButton(){ return $("//input[@id='nav-search-submit-button']") }
  
   
}
export default new HomePageControl();