import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

test('Verify Title', async ({ page }) => {
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('Verify URL', async ({ page }) => {
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
``