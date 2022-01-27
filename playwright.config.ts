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
            video: 'retain-on-failure' 
            }
    },
    {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
    },
    {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] },
    }
    ]

}

export default config;