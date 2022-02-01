import { expect, Locator, Page } from "@playwright/test";

export class DetailPage{
    readonly page : Page;

    readonly addToWishButton : Locator;
    readonly removeToWishButton: Locator;
    readonly addToCartButton : Locator;
    readonly quantityInput : Locator;
    readonly addToCartModal : Locator;
    readonly proceedToCheckoutButton: Locator;

    constructor(page : Page){
        this.page = page;

        this.addToWishButton = page.locator('[data-lang="Add To Wishlist"]');
        this.removeToWishButton = page.locator('[data-lang="Remove From Wishlist"]');
        this.addToCartButton = page.locator('#details_buy_button');
        this.quantityInput = page.locator('#txtQty');
        this.proceedToCheckoutButton = page.locator(".success");
        
    }

    async selectQuantity(quantity : number){
        //await this.page.waitForSelector('#txtQty');
        await this.quantityInput.fill(quantity.toString());
    }

    async addToCart(){
        await this.addToCartButton.click();
    }

    async addToWish(){
        await this.addToWishButton.click();
    }

    async removeToWish(){
        await this.removeToWishButton.click();
    }

    async proceedToCheckout(){
        const locator = this.page.locator('#softadd-modal-data');
        await expect(locator).toHaveCSS('display', 'block');
        await this.proceedToCheckoutButton.click();
    }

    async waitDetailPage(){
        await this.page.waitForSelector('#details');
    }
}