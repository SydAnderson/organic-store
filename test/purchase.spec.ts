import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login-page';
import { HomePage } from '../pages/home-page';
import { AccountPage } from '../pages/account-page';
import { ListPage } from '../pages/list-page';
import { DetailPage } from '../pages/detail-page';

test.describe('purchases tests', async () =>{
   
    test('purchase two lettuce OK', async ({ page, baseURL })=>{

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const accountPage = new AccountPage(page);
        const listPage = new ListPage(page);
        const detailPage = new DetailPage(page);
        

    
    });

});