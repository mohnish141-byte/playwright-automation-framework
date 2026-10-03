import { Page, Locator } from '@playwright/test';

export class ProductPage {

    readonly page: Page;
    readonly addToCartBtn: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;

        this.addToCartBtn = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addProductToCart() {
        await this.addToCartBtn.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }
}