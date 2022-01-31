import { expect, Locator, Page } from "@playwright/test";

export class AccountPage{
    readonly page : Page;
    readonly backToStore : Locator;

    readonly menuDetail : Locator;
    readonly orderHistory : Locator;
    readonly abandonedCarts : Locator;
    readonly wishList : Locator;
    readonly newsletterSubs : Locator;
    readonly support : Locator;

    readonly welcomeMsg : Locator;


    constructor(page : Page) {
        this.page = page;
        this.backToStore = page.locator('//div[@class="account_buttons"]/a[contains(@href,"https://automationstore.onlineweb.shop")]');
        
        this.menuDetail = page.locator('.menu_option_details');
        this.orderHistory = page.locator('.menu_option_orders');
        this.abandonedCarts = page.locator('.menu_option_carts');
        this.wishList = page.locator('.menu_option_wishlist');
        this.newsletterSubs = page.locator('.menu_option_newsletter');
        this.support = page.locator('.menu_option_support');
        
        this.welcomeMsg = page.locator('.welcome_message');
    }

    async gotoHome(){
        this.backToStore.click();
        await this.page.waitForLoadState('networkidle');    
    }

    public get toaster(){
        return this.page.waitForSelector('.welcome_message');
    }

}
