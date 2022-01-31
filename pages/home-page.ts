import { expect, Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page;
    readonly accountButton : Locator;
    readonly signInButton : Locator;
    readonly searchInput : Locator;
    readonly searchButton : Locator;


    constructor(page : Page) {
        this.page = page;
        this.accountButton = page.locator('#account');
        this.signInButton = page.locator('#account');
        this.searchInput = page.locator('#txtQuickSearch');
        this.searchButton = page.locator('//button[@aria-label="search"]');
    }

    async gotoSignIn(){
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async search(value : string){
        await this.searchInput.fill(value);
        await this.searchButton.click();
    }
}