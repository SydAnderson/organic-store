import { expect, Locator, Page } from "@playwright/test";

export class ShippingOptionPage{
    readonly page : Page;

    readonly continueToPaymentButton : Locator;
    readonly nacionalShippingChBx : Locator;

    constructor(page : Page){
        this.page = page;
        this.continueToPaymentButton = page.locator('#btnConfirmShipping');
        this.nacionalShippingChBx = page.locator('#shipping_options_list')
    }

    async waitShippingOptionPage(){
        const locator = this.page.locator('#shipping_options_wait');
        await expect(locator).toHaveCSS('display', 'none', {timeout : 15000});
    }

    async ShippingOptionNacional(){
        await this.nacionalShippingChBx.click();
    }

    async continueToPayment(){
        await this.continueToPaymentButton.click();
    }
}