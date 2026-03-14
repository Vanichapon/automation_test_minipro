import { test, expect } from '@playwright/test';

test('R00007 เมนูเข้าสู่ระบบ', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
    await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
    await expect(page).toHaveURL(/login/);
    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00007.png', fullPage: true });
});