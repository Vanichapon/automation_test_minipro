import { test, expect } from '@playwright/test';

test('R00002 เมนูหน้าหลัก', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
    await page.getByRole('link', { name: 'หน้าหลัก' }).click();
    await expect(page).toHaveURL(/index/);
    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00002.png', fullPage: true });
});