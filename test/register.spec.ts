import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login-page';
import { RegisterPage } from '../pages/register-page';
import { HomePage } from '../pages/home-page';
import { AccountPage } from '../pages/account-page';


test.describe('registration tests', async () =>{
   
    test('registration OK', async ({ page, baseURL })=>{

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const registerPage = new RegisterPage(page);
        const accountPage = new AccountPage(page);
        
        await page.goto(baseURL);

        await homePage.gotoSignIn();
        await loginPage.startRegister();
        await registerPage.completeRegistration();

        const toaster = await accountPage.toaster;
        expect(await toaster?.textContent()).toContain("Welcome");         
    });

}); 
