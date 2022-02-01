import { expect, Locator, Page } from "@playwright/test";

export class ShippingAddressPage{
    readonly page : Page;

    readonly selectAddressBtn : Locator;

    constructor(page : Page){
        this.page = page;
        this.selectAddressBtn = page.locator('//div[@class="saved_address_item_select"]');

    }

    async waitShippingAddressPage(){
        await this.page.waitForSelector('#saved_address_list', { timeout : 30000});
    }

    async selectSavedAddress(){
        await this.selectAddressBtn.click();
    }

}