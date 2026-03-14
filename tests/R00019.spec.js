import { test, expect } from '@playwright/test';

test('R00019 เปลี่ยนรหัสผ่านไม่ได้หากไม่กรอกรหัสผ่านปัจจุบัน', async ({ page }) => {
await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');

    await page.fill('#username', 'TestTeam02');
    await page.fill('#password', 'Test@123456');

    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();

    await page.getByText('ตั้งค่า').click();
    await expect(page).toHaveURL(/settings/);

    await page.fill('#username', 'TestTeam02');
    await page.fill('#email', 'test2@domain.com');
    await page.fill('#new_password', 'NewPass@1234');
    await page.fill('#confirm_password', 'NewPass@1234');

    await page.fill('#current_password', 'NewPass@123456');

    await page.getByRole('button', { name: ' บันทึกการเปลี่ยนแปลง' }).click();
    await expect(page.getByText('รหัสผ่านปัจจุบันไม่ถูกต้อง')).toBeVisible();

    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00019.png', fullPage: true });
});