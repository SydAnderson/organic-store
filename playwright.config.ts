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
    },
    {
        name: 'iPhone 11',
        use: {
          browserName: 'webkit',
          ...devices['iPhone 11']
        }
    }
    ]

}

export default config;