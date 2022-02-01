import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login-page';
import { HomePage, Subcategories } from '../pages/home-page';
import { AccountPage } from '../pages/account-page';
import { ListPage } from '../pages/list-page';
import { DetailPage } from '../pages/detail-page';
import { CartPage } from '../pages/cart-page';
import { ShippingAddressPage } from '../pages/shipping_address-page';
import { ShippingOptionPage } from '../pages/shipping_option-page';
import { PaymentOptionPage } from '../pages/payment_option-page';


test.describe('purchases tests', async () =>{
   
    test('purchase two lettuce OK', async ({ page, baseURL })=>{

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const accountPage = new AccountPage(page);
        const listPage = new ListPage(page);
        const detailPage = new DetailPage(page);
        const cartPage = new CartPage(page);
        const shippingAddressPage = new ShippingAddressPage(page);
        const shippingOptionPage = new ShippingOptionPage(page);
        const paymentOptionPage = new PaymentOptionPage(page);

        await page.goto(baseURL);

        await homePage.gotoSignIn();
        await loginPage.signIn('test-automation-1@example.com', 'test1234');

        const toaster = await accountPage.toaster;
        expect(await toaster?.textContent()).toContain("Welcome");

        await accountPage.backToStore();
        await homePage.selectStoreSubcategory(Subcategories.organicVegetable);

        await listPage.waitListPage();
        await listPage.selectProduct("Lettuce");
        
        await detailPage.waitDetailPage();
        await detailPage.selectQuantity(2);
        await detailPage.addToCart();
        await detailPage.proceedToCheckout();

        await cartPage.checkout();

        await shippingAddressPage.waitShippingAddressPage();
        await shippingAddressPage.selectSavedAddress();

        await shippingOptionPage.waitShippingOptionPage();
        await shippingOptionPage.continueToPayment();
        
        await paymentOptionPage.acceptTerms();
        await paymentOptionPage.payByCash();
        await paymentOptionPage.completeOrder();
        
        await expect(paymentOptionPage.sectionPayment).toHaveCSS('display', 'block');
    });

});