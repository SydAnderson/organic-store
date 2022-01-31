import { expect, Locator, Page } from "@playwright/test";

export class ListPage{
    readonly page : Page;
    readonly item : Locator;

    constructor(page : Page ){
        this.page = page;

    }

    async gotoDetailItem(item : string){
        await this.page.click(`a:has-text("${ item }")`);
    }
    
}