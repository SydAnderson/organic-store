import { expect, Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page;
    readonly accountButton : Locator;
    readonly signInButton : Locator;


    constructor(page : Page) {
        this.page = page;
        this.accountButton = page.locator('#account');
        this.signInButton = page.locator('#account');
    
    }

    async gotoSignIn(){
        await this.signInButton.click();
    }
}