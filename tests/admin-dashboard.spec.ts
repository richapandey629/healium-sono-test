import { test, expect } from '@playwright/test';

test('admin dashboard test', async ({ page }) => {
  await page.goto('https://www.healiumsono.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('admin@healiumsono.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('A');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Admin@');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Admin@H');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Admin@healiumsono1234');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('main').click();
  await page.getByRole('main').click();
  await page.getByRole('main').click();
  await page.getByRole('main').click();
  await expect(page.getByRole('main').getByText('Hospitals')).toBeVisible();
  await expect(page.getByRole('main').getByText('Radiologists')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Demo Bookings' })).toBeVisible();
  await expect(page.getByText('List of demo booking')).toBeVisible();
});