import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.healiumsono.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('abchospital.com');
  await page.getByRole('textbox', { name: 'Enter your email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Enter your email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Enter your email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Enter your email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('abchospital@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@H');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@Hospital123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Notification' }).click();
  await expect(page.getByRole('link', { name: 'Notification' })).toBeVisible();
  await expect(page.getByText('Recent uploads')).toBeVisible();
  await expect(page.getByText('Unread only')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Notification' })).toBeVisible();
});