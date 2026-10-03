import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/Loginpage';

const users = [
    'standard_user',
    'problem_user',
    'visual_user'
];

users.forEach((user) => {

    test(`Login with ${user}`, async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        const loginPage = new LoginPage(page);

        await loginPage.login(
            user,
            'secret_sauce'
        );

        await expect(page).toHaveURL(/inventory/);

    });

});