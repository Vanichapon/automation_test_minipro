import { test, expect } from '@playwright/test';

test('R00017 ปุ่มสมัครสมาชิกจากหน้า Login', async ({ page }) => {

        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');

        await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();

        await expect(page).toHaveURL(/register_user/);
        await page.screenshot({ path: 'C:/automation_test_minipro/image/R00017.png', fullPage: true });
    });