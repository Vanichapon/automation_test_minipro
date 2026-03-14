import { test, expect } from '@playwright/test';

test('R00012 สมัครทีมไม่ได้เมื่อ Username ซ้ำ', async ({ page }) => {

        
await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/register_user.php');

    await page.fill('#username', 'TestTeam01');
    await page.fill('#email', 'test@domain.com');
    await page.fill('#password', 'Test@123456');
    await page.fill('#confirm_password', 'Test@123456');

    await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00012.png', fullPage: true });
});