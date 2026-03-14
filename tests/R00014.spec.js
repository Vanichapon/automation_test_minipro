import { test, expect } from '@playwright/test';

test('R00014 เข้าสู่ระบบไม่สำเร็จเมื่อข้อมูลผิด', async ({ page }) => {

    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');

        await page.fill('#username', 'TestTeam02');
        await page.fill('#password', '123456');

        await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
        await page.screenshot({ path: 'C:/automation_test_minipro/image/R00014.png', fullPage: true });
    });