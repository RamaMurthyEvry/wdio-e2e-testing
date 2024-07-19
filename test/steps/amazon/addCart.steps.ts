import { Then } from '@cucumber/cucumber';
import cartPage from '../../../src/pages/amazon-pages/cart.page.ts'


Then(/^user filter the product by price between Rs "([^"]*)" – "([^"]*)"$/, async (option1: string, option2: string) => {
    const pricefilter = `https://www.amazon.in/s?k=Samsung+M34+5G&qid=1721371826&rnid=1318502031&ref=sr_nr_p_36_0_0&low-price=${option1}&high-price=${option2}`
    await browser.url(pricefilter);

});

Then(/^Verify that all displayed products fall within the specified price range Rs "([^"]*)" – "([^"]*)"$/, async (min: string, max: string) => {
    const lowerprice = await $(`//div/label[@aria-label='Minimum']/span[text()='${min}']`);
    const highprice = await $(`//div/label[@aria-label='Maximum']/span[text()='${max}']`);
    const lower = await lowerprice.getText();
    const high = await highprice.getText();
    await expect(high).toEqual(max);
    await expect(lower).toEqual(min);

});


Then(/^user select one product and go to product details screen$/, async () => {
    await cartPage.searchProductclick();
});


Then(/^user click on the "([^"]*)" button$/, async (args1) => {
    await cartPage.clickOnAddToCart();
    console.log(`${args1}`);
    await browser.pause(20000);

});





