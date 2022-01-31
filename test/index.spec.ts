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
  await page.fill('#shipping_postcode', faker.address.zipCode('#####'));
  await page.fill('#account_address_telephone', faker.phone.phoneNumber());
  await page.fill('#account_address_mobile', faker.phone.phoneNumber());
 
  //click in register button
  await page.click('#add_address_button');
  
});



test('basic WishList', async ({ page }) => {

  await page.goto('https://automationstore.onlineweb.shop/');
  await page.click('#account');

  //login
  await page.fill('#account_login_register_email', 'test-andy@example.com');
  await page.fill('#account_login_register_login_password', 'test1234');
  await page.click('#account_login_register_button_login');

  //goto Home -> press button Back to Store
  //locator with xpath //div[@class='account_buttons']/a[contains(@href,"https://automationstore.onlineweb.shop")]
  await page.waitForTimeout(2000);
  await page.click('//div[@class="account_buttons"]/a[contains(@href,"https://automationstore.onlineweb.shop")]');
  

  //fill search with "tomato"
  await page.fill('#txtQuickSearch', 'tomatoes');
  await page.locator('//button[@aria-label="search"]').click();

  //select first element in ListPage
  //todo: select a product by name description
  await page.click('a:has-text("Tomatoes")');
  
  //click -> add to wishlist in DetailsPage
  await page.click('[data-lang="Add To Wishlist"]');
  await page.waitForLoadState('networkidle');
  //click -> remove from wishlist short way
  await page.click('[data-lang="Remove From Wishlist"]');
  
});

test('basic product purchase', async ({ page }) => {
  await page.goto('https://automationstore.onlineweb.shop/');
  await page.click('#account');

  //login
  await page.fill('#account_login_register_email', 'test-automation-1@example.com');
  await page.fill('#account_login_register_login_password', 'test1234');
  await page.click('#account_login_register_button_login');

  //goto Home -> press button Back to Store
  //locator with xpath //div[@class='account_buttons']/a[contains(@href,"https://automationstore.onlineweb.shop")]
  await page.waitForTimeout(2000);
  await page.click('//div[@class="account_buttons"]/a[contains(@href,"https://automationstore.onlineweb.shop")]');

  //goto Store-Organic Vegetables
  await page.locator('//div[@id="header2"]//span[@data-lang="Store"]').hover();
  await page.click('//div[@id="header2"]//span[text()="Organic Vegetables"]');
 

  //click in Lettuce - goto-> Detail
  await page.click('a:has-text("Lettuce")');

  //Add 2 product
  await page.fill("#txtQty", "2");
  await page.click('[data-lang="Add to Cart"]');

  await page.waitForSelector('#softadd-modal-title');

  //se usa la clase porque para buscarlo con texto parece tener unos espacios en blanco al principio
  //por el momento la clase es unica
  //goto -> CartPage
  await page.click('.success');

  //goto -> ShippingAddressPage
  await page.waitForSelector('#basket_purchase_main')
  await page.click('#basket_purchase_main');

  //select a saved address -> goto -> ShippingOptionsPage 
  await page.waitForSelector('#saved_address_list');
  await page.click('//div[@class="saved_address_item_select"]');

  //click continue to payment -> goto PaymentOptionsPage
  await page.waitForLoadState('networkidle');
  await page.waitForSelector('#btnConfirmShipping');
  await page.click('#btnConfirmShipping');
  
  await page.waitForLoadState('networkidle');
  await page.waitForSelector('#terms_acceptance');
  await page.click('#terms_acceptance');

  await page.click('.payment_item_info');

  //Se recurre a css seleector debido a una duplicidad de código en la página.
  await page.waitForTimeout(2000);
  await page.click('#paybyother_74jpMc > div.payment_item_redirect > div.button_container.button_container_payment > input');

  //wait for text that contains "Your order has been received"
  await page.waitForTimeout(2000);
  await expect(page.locator('#payment')).toHaveCSS('display', 'block');


});

