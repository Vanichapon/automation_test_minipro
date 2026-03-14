import { test, expect } from '@playwright/test';

test('R00006 เมนูติดต่อเรา', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
    await page.getByRole('link', { name: 'ติดต่อเรา' }).click();
    await expect(page).toHaveURL(/contact/);
    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00006.png', fullPage: true });
});