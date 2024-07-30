import flipkartHomeControls from '../flipkart-controls/flipkartHome.controls.ts';
import { click } from '../../utils/Commands.ts';

class FlipkartHomePage {

    public async searchForProduct(product: string) {
        await (flipkartHomeControls.searchBox).waitForClickable();
        await (flipkartHomeControls.searchBox).setValue(product);
    }

    public async clickOnSearchIcon() {
        await (flipkartHomeControls.searchIcon).waitForClickable({ timeout: 50000 });
        await click(flipkartHomeControls.searchIcon);
        // await click(flipkartHomeControls.searchIcon)
    }

}

export default new FlipkartHomePage();


