import {setText} from '../../../src/utils/Commands.ts';
import SearchAndSortControl from "../amazon-controls/SearchingandSorting.control.ts";


class SProduct{
    async searchProduct(productName:string)
    {
    await setText(SearchAndSortControl.enterInputText,productName)
	await SearchAndSortControl.clickSeachButton.click();
	await browser.pause(1000);
    }
   
    }


    export default new SProduct();
    





