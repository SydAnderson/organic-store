import { expect, Locator, Page } from "@playwright/test";
import faker from '@faker-js/faker';

export class LoginPage {

    readonly page: Page;
    
    readonly loginCheckbox : Locator;
    readonly registerCheckbox : Locator;
    
    readonly emailInput : Locator;
    readonly loginPasswordInput : Locator;
    readonly registerPasswordInput : Locator;

    readonly loginButton : Locator;
    readonly registerButton : Locator;




    constructor(page : Page) {
        this.page = page;
        
        this.loginCheckbox = page.locator('#account_login_register_which_login');
        this.registerCheckbox = page.locator('#account_login_register_button_login');
        
        this.emailInput = page.locator('#account_login_register_email');
        this.loginPasswordInput = page.locator('#account_login_register_login_password');
        this.registerPasswordInput = page.locator('#account_login_register_login_password');
        
        this.loginButton = page.locator('#account_login_register_button_login');
        this.registerButton = page.locator('#account_login_register_button_register');


    }

    async signIn(user : string, password : string){
        await this.loginCheckbox.click();
        await this.emailInput.fill(user);
        await this.loginPasswordInput.fill(password);
        await this.loginButton.click();
    }

    async gotoRegister(){
        await this.registerCheckbox.click();
        await this.emailInput.fill(faker.internet.email());
        await this.registerPasswordInput.fill(faker.internet.password());
        await this.registerButton.click();
    }
}