import { test, expect } from '@playwright/test';

test('R00016 ไม่กรอกข้อมูลเข้าสู่ระบบ', async ({ page }) => {

    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');

        await page.fill('#username', 'TestTeam02');
        await page.fill('#password', '');

        await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();

        await page.screenshot({ path: 'C:/automation_test_minipro/image/R00016.png', fullPage: true });
    });