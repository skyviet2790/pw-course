import { test } from '@playwright/test';

test('Test Register Page', async ({ page }) => {
    await test.step('Go to page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Click on Register page', async () => {
        await page.locator("//td[@href='01-xpath-register-page.html']").click();
    })

    await test.step('Input value in username', async () => {
        await page.locator("//input[@id ='username']").fill("leviet2790")
    })

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

    
})