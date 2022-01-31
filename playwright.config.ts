// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
use:{
    baseURL: "https://automationstore.onlineweb.shop/",
    },
projects: [
    {
        name: 'chromium',
        use: { 
            ...devices['Desktop Chrome'],
            video: 'on'
            }
    }
    ]

}

export default config;