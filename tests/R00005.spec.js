import { test, expect } from '@playwright/test';

test('R00005 เมนูประกาศ', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
    await page.getByRole('link', { name: 'ประกาศ' }).click();
    await expect(page).toHaveURL(/annunciate/);
    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00005.png', fullPage: true });
});