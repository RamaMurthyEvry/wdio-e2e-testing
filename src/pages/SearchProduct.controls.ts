import { $ } from '@wdio/globals';

class SearchProductControls {
    public get searchbox() {
        return $("//input[@name='q']")
    }
    public get searchBtn() {
        return $("//button[@title='Search for Products, Brands and More']//*[name()='svg']")
    }
    public get actualText() {
        return $("//*[@id='container']/div/div[3]/div[1]/div[2]/div[1]/div/div/span/span");
    }
    public get searchResults() {
        return $$("//html");
    }
    public async verifyProductInResults(productName: string) {
        const elements = await this.searchResults;
        const foundProduct = elements.find(async (element) => {
            const text = await element.getText();
            return text.includes(productName);
        });
        return foundProduct !== undefined;
    }
}
export default new SearchProductControls();
