import { test, expect } from '@playwright/test';

test('R00003 เมนูตารางการแข่งขัน', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
    await page.getByRole('link', { name: 'ตารางการแข่งขัน' }).click();
    await expect(page).toHaveURL(/schedule/);
    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00003.png', fullPage: true });
});