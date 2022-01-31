import { expect, Locator, Page } from "@playwright/test";

export class DetailPage{
    readonly page : Page;

    readonly addToWish : Locator;
    readonly removeToWish: Locator;
    readonly addToCart : Locator;

    constructor(page : Page){
        this.page = page;

        this.addToWish = page.locator('[data-lang="Add To Wishlist"]');
        this.removeToWish = page.locator('[data-lang="Remove From Wishlist"]');
        
    }
}