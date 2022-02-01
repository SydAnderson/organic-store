import { expect, Locator, Page } from "@playwright/test";

export class ListPage{
    readonly page : Page;
    readonly item : Locator;

    constructor(page : Page ){
        this.page = page;

    }

    async selectProduct(item : string){
        await this.page.click(`a:has-text("${ item }")`);
    }
    
    async waitListPage(){
        await this.page.waitForSelector('#browse_products_container');
    }
}