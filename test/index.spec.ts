import { test, expect } from '@playwright/test';
import faker from '@faker-js/faker';

test('basic register', async ({ page }) => {
  await page.goto('https://automationstore.onlineweb.shop/');
  
  //click goto sign in sign up page
  await page.click('#account');
  
  //click create account
  await page.click('#account_login_register_which_register');

  //fill email and password
  await page.fill('#account_login_register_email', faker.internet.exampleEmail());
  await page.fill('#account_login_register_register_password', faker.internet.password());
  //click register button
  await page.click('#account_login_register_button_register');
  
  //if exist text 
  const content = await page.textContent('#welcome');
  expect(content).toBe('Login or Register');

  //fill all fields
  await page.fill('#account_address_company', faker.company.companyName());
  await page.fill('#account_address_fname', faker.name.firstName());
  await page.fill('#account_address_lname', faker.name.lastName());
  await page.fill('#account_address_address1', faker.address.streetAddress(true));
  await page.fill('#account_address_address2', faker.address.streetAddress(true));
  await page.fill('#account_address_city', faker.address.city());
  
  //selecting a item from dropdown with a label
  await page.selectOption('#ddlCountry', { label: 'Argentina' } );
  //it could be validated if the status has been changed

  //filling in the rest of the fields
  await page.fill('#shipping_county', faker.address.county());
  await page.fill('#shipping_postcode', faker.address.zipCode("#####"));
  await page.fill('#account_address_telephone', faker.phone.phoneNumber());
  await page.fill('#account_address_mobile', faker.phone.phoneNumber());
 
  //click in register button
  await page.click('#add_address_button');
  

  //check if exist text after register
  //const contentRegister = await page.textContent('#welcome');
  //expect(contentRegister).toContainText("Welcome");
});
