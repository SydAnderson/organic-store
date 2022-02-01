import { expect, Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page;
    readonly accountButton : Locator;
    readonly signInButton : Locator;
    readonly searchInput : Locator;
    readonly searchButton : Locator;
    readonly storeMenu : Locator;


    constructor(page : Page) {
        this.page = page;
        this.accountButton = page.locator('#account');
        this.signInButton = page.locator('#account');
        this.searchInput = page.locator('#txtQuickSearch');
        this.searchButton = page.locator('//button[@aria-label="search"]');
        this.storeMenu = page.locator('//div[@id="header2"]//span[@data-lang="Store"]');

    }

    async gotoSignIn(){
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async search(value : string){
        await this.searchInput.fill(value);
        await this.searchButton.click();
    }

    async selectStoreSubcategory(subcategory : Subcategories = Subcategories.organicFruit ){
        await this.storeMenu.hover();
        await this.page.click(`//div[@id="header2"]//span[text()="${ subcategory }"]`);
    }

}

export enum Subcategories {
    organicFruit = "Organic Fruits",
    organicVegetable = "Organic Vegetables",
    seedAndNuts = "Seeds & Nuts",
    plantBased = "Plant-Based Alternatives",
    Packsalads = "Packaged Salads"
}

