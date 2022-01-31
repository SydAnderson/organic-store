import { expect, Locator, Page } from "@playwright/test";
import faker from '@faker-js/faker';

export class RegisterPage{
    readonly page : Page;
    readonly companyNameInput : Locator;
    readonly firstNameInput : Locator;
    readonly lastNameInput : Locator;
    readonly addressLine1Input: Locator;
    readonly addressLine2Input: Locator;
    readonly cityInput: Locator;
    readonly countryDropdown : Locator;
    readonly countyInput : Locator;
    readonly zipCodeInput: Locator;
    readonly telephoneInput: Locator;
    readonly mobileInput: Locator;

    readonly registerButton: Locator;


    constructor(page : Page) {
        this.page = page;
        this.companyNameInput = page.locator('#account_address_company');
        this.firstNameInput = page.locator('#account_address_fname');
        this.lastNameInput = page.locator('#account_address_lname');
        this.addressLine1Input = page.locator('#account_address_address1');
        this.addressLine2Input = page.locator('#account_address_address2');
        this.cityInput = page.locator('#account_address_city');
        this.countryDropdown = page.locator('#ddlCountry');
        this.countyInput = page.locator('#shipping_county');
        this.zipCodeInput = page.locator('#shipping_postcode');
        this.telephoneInput = page.locator('#account_address_telephone');
        this.mobileInput = page.locator('#account_address_mobile');

        this.registerButton = page.locator('#add_address_button');
    }

    async completeRegistration(){
        await this.companyNameInput.fill(faker.company.companyName());
        await this.firstNameInput.fill(faker.name.findName());
        await this.lastNameInput.fill(faker.name.lastName());
        await this.addressLine1Input.fill(faker.address.streetAddress(true));
        await this.addressLine2Input.fill(faker.address.streetAddress(true));
        await this.cityInput.fill(faker.address.cityName());
        await this.selectDropdown('Argentina');
        await this.countyInput.fill(faker.address.county());
        await this.zipCodeInput.fill(faker.address.zipCode());
        await this.telephoneInput.fill(faker.phone.phoneNumber());
        await this.mobileInput.fill(faker.phone.phoneNumber());

        await this.registerButton.click();
        await this.page.waitForLoadState('networkidle');
        
    }

    async selectDropdown(country : string){
        await this.countryDropdown.selectOption({ label: country } );
    }
    

}