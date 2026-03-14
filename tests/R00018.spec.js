import { test, expect } from '@playwright/test';

test('R00018 เปิดหน้าตั้งค่าบัญชีได้', async ({ page }) => {

    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');

    await page.fill('#username', 'TestTeam2');
    await page.fill('#password', 'Test@123456');

    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();

    await page.getByText('ตั้งค่า').click();
    await expect(page).toHaveURL(/settings/);

    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00018.png', fullPage: true });
});