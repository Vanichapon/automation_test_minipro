import { test, expect } from '@playwright/test';

test('R00011 สมัครทีมไม่สำเร็จเมื่อกรอกข้อมูลไม่ครบ', async ({ page }) => {

    
await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/register_user.php');

    await page.fill('#username', '');
    await page.fill('#email', 'test2@domain.com');
    await page.fill('#password', 'Test123456');
    await page.fill('#confirm_password', '');

    await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00011.png', fullPage: true });
});