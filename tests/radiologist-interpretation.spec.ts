import { test, expect } from '@playwright/test';

test('Radiologistt Interpretation Test', async ({ page }) => {
  await page.goto('https://www.healiumsono.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('richa@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@C');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@R');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@Radiologist123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('main').click();
  await page.getByRole('link', { name: 'Interpretation' }).click();
  await expect(page.getByRole('link', { name: 'Interpretation' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Ultrasound Worklist' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Search patient name or' }).click();
  await expect(page.getByRole('button', { name: 'How to Use Measurement Tools' })).toBeVisible();
  await page.getByRole('button', { name: 'How to Use Measurement Tools' }).click();
  await expect(page.getByRole('heading', { name: 'Measurement Instructions' })).toBeVisible();
  await page.getByRole('button', { name: '×' }).click();
  await expect(page.getByRole('heading', { name: 'Ultrasound Worklist' })).toBeVisible();
  
});