import { test, expect } from '@playwright/test';

test('R00021 เปลี่ยนชื่อหรืออีเมลได้ แต่ต้องใส่รหัสผ่านยืนยัน', async ({ page }) => {

    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');

    await page.fill('#username', 'TestTeam2');
    await page.fill('#password', 'NewPass@1234');

    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();

    await page.getByText('ตั้งค่า').click();
    await expect(page).toHaveURL(/settings/);
    
    await page.fill('#username', 'TeamName02');
    await page.fill('#email', 'newteam@email.com');

    await page.fill('#current_password', 'NewPass@1234');

    await page.getByRole('button', { name: 'บันทึกการเปลี่ยนแปลง' }).click();

    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00021.png', fullPage: true });
});