import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login-page';
import { HomePage } from '../pages/home-page';
import { AccountPage } from '../pages/account-page';
import { ListPage } from '../pages/list-page';
import { DetailPage } from '../pages/detail-page';


test.describe('wishlist tests', async () =>{
   
    test('add tomatoes to wishlist OK', async ({ page, baseURL })=>{

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const accountPage = new AccountPage(page);
        const listPage = new ListPage(page);
        const detailPage = new DetailPage(page);
        
        let item = "Tomatoes"

        await page.goto(baseURL);

        await homePage.gotoSignIn();
        await loginPage.signIn('test-automation-1@example.com', 'test1234');

        const toaster = await accountPage.toaster;
        expect(await toaster?.textContent()).toContain("Welcome");
        
        //click backToStore
        await accountPage.gotoHome();

        await homePage.search(item);
        await page.waitForLoadState('networkidle');
        await listPage.gotoDetailItem(item);

        await detailPage.addToWish.click();
        await page.waitForLoadState('networkidle');
        await detailPage.removeToWish.click();
                
    });

}); 
