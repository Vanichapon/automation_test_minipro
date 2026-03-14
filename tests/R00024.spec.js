import { test, expect } from '@playwright/test';

test('R00024 แสดงรายชื่อเกียรติบัตรทั้งหมด', async ({ page }) => {

    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');

    await page.fill('#username', 'TestTeam02');
    await page.fill('#password', 'NewPass@1234');

    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();

    await page.getByText('เกียรติบัตร').click();
    await expect(page).toHaveURL(/certificate/);

    await page.getByRole('link', { name: 'ดูรายชื่อทั้งหมด' }).click();

    await page.screenshot({ path: 'C:/automation_test_minipro/image/R00024.png', fullPage: true });
});