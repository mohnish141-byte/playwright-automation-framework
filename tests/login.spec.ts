import { test, expect } from './Fixtures/custumeFixture';

test('Login Test', async ({ page, loginPage }) => {

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(page).toHaveURL(/inventory/);
});