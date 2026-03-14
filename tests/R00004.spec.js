import { test, expect } from '@playwright/test';

test('R00004 เมนูสมัครทีม', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
    await page.getByRole('link', { name: 'สมัครทีม' }).nth(0).click();
    await expect(page).toHaveURL(/register_user/);
    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00004.png', fullPage: true });
});