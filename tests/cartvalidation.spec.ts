import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/Loginpage';
import { ProductPage } from '../Pages/ProductPage';

test('Verify Product In Cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const loginPage = new LoginPage(page);
    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    const productPage = new ProductPage(page);

    await productPage.addProductToCart();
    await productPage.openCart();

    await expect(page).toHaveURL(/cart.html/);

    await expect(
        page.locator('.cart_item .inventory_item_name')
    ).toHaveText('Sauce Labs Backpack');

});