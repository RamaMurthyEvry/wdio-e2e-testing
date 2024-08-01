import { When,Then } from '@cucumber/cucumber';
import fkHpPage from '../../../src/pages/flipkart-pages/fkHp.Page.ts';
When('I navigate to the Electronics section', async () => {
    await fkHpPage.navigateToElectronics();
  });
When('I choose an Laptop from the list', async () => {
    await fkHpPage.chooseProduct();
  });
  When('I click on the "Add to Cart" button', async () => {
    await fkHpPage.addProductToCart();
    await fkHpPage.goToCart();
   });
