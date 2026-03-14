import { test, expect } from '@playwright/test';

test('R00009 สมัครทีมไม่สำเร็จเมื่อรหัสผ่านไม่ถูกต้องตามเงื่อนไข', async ({ page }) => {


await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/register_user.php');

    await page.fill('#username', 'TestTeam02');
    await page.fill('#email', 'test2@domain.com');
    await page.fill('#password', '1234');
    await page.fill('#confirm_password', '1234');

    await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00009.png', fullPage: true });
});