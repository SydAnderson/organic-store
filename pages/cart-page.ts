import { expect, Locator, Page } from "@playwright/test";

export class CartPage {
    readonly page : Page;
    readonly checkoutButton : Locator;

    constructor(page : Page){
        this.page = page;
        this,this.checkoutButton = page.locator('#basket_purchase_main');
    }

    async  checkout() {
        await this.checkoutButton.click();
    }

}