import { test, expect } from '@playwright/test';

test('R00015 ปุ่มลืมรหัสผ่าน', async ({ page }) => {

    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');

        await page.getByRole('link', { name: 'ลืมรหัสผ่าน' }).click();

        await expect(page).toHaveURL(/forgot/);
        await page.screenshot({ path: 'C:/automation_test_minipro/image/R00015.png', fullPage: true });
    });