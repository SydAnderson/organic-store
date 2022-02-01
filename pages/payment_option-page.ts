import { expect, Locator, Page } from '@playwright/test';

export class PaymentOptionPage {
    readonly page: Page;

    readonly termsAcceptanceChBx : Locator;
    readonly completeOrderButton : Locator;
    readonly payByCashButton : Locator;

    readonly sectionPayment : Locator; 

    constructor( page : Page){
        this.page = page;
        this.termsAcceptanceChBx = this.page.locator('#terms_acceptance');
        this.payByCashButton = this.page.locator('.payment_item_info');      
        this.completeOrderButton = this.page.locator('#paybyother_74jpMc > div.payment_item_redirect > div.button_container.button_container_payment > input');
        this.sectionPayment = this.page.locator('#payment');
    }

    async acceptTerms() {
        await this.termsAcceptanceChBx.click();
    }

    async payByCash() {
        await this.payByCashButton.click();
    }

    async completeOrder(){
        await this.completeOrderButton.click();
    }


}