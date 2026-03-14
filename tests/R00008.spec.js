import { test, expect } from '@playwright/test';

test('R00008 สมัครทีมสำเร็จเมื่อกรอกข้อมูลครบ', async ({ page }) => {

await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/register_user.php');

    await page.fill('#username', 'TestTeam02');
    await page.fill('#email', 'test2@domain.com');
    await page.fill('#password', 'Test@123456');
    await page.fill('#confirm_password', 'Test@123456');

    await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00008.png', fullPage: true });
});