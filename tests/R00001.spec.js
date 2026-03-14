import { test, expect } from '@playwright/test';

test('R00001 สมัครทีมจากหน้าแรก', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
    await page.getByRole('link', { name: 'สมัครทีม' }).nth(1).click();
    await expect(page).toHaveURL(/register_user/);
    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00001.png', fullPage: true });
});