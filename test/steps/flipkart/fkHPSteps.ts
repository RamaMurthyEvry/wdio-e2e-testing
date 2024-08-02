import { When} from '@cucumber/cucumber';
import fkHpPage from '../../../src/pages/flipkart-pages/fkHp.Page.ts';
When('I choose an Laptop from the list', async () => {
    await fkHpPage.chooseProduct();
  });
  When('I click on the "Add to Cart" button', async () => {
    await fkHpPage.addProductToCart();
    await fkHpPage.goToCart();
   });
   When(/^I click on the "Save for Later"$/, async () => {
    await fkHpPage.saveProductForLater();
  });
  When(/^I move the item back to the cart$/, async () => {
    await fkHpPage.moveProductToCart();
  });
