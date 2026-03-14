import { test, expect } from '@playwright/test';

test('R00010 สมัครทีมไม่สำเร็จเมื่อยืนยันรหัสผ่านไม่ตรง', async ({ page }) => {


await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/register_user.php');

    await page.fill('#username', 'TestTeam2');
    await page.fill('#email', 'test02@domain.com');
    await page.fill('#password', 'Test123456');
    await page.fill('#confirm_password', '12345678');

    await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00010.png', fullPage: true });
});