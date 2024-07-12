import { $ } from '@wdio/globals';
class SecurePage {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash') }
}

export default new SecurePage();
