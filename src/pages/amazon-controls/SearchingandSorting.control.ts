import { $ } from '@wdio/globals';
export class SearchAndSortControl
{
    public get enterInputText(){ return $('input.zDPmFV') }
    public get clickSeachButton(){return $('button.MJG8Up')}
} 
export default new SearchAndSortControl();


