import { test, expect } from '@playwright/test';

test('R00013 เข้าสู่ระบบสำเร็จ', async ({ page }) => {

    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');

        await page.fill('#username', 'TestTeam2');
        await page.fill('#password', 'Test@123456');

        await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
        await page.screenshot({ path: 'C:/automation_test_minipro/image/R00013.png', fullPage: true });
    });