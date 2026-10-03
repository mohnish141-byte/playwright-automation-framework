import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/Loginpage';
import { ProductPage } from '../Pages/ProductPage';

test('Add Product To Cart', async ({ page }) => {

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
});