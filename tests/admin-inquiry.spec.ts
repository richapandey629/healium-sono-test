import { test, expect } from '@playwright/test';

test('Admin Inquiry test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.healiumsono.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Enter your email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Enter your email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Enter your email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('admin@healiumsono.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('A');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Admin@healiumsono1234');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Inquiry' }).click();
  await expect(page.getByRole('link', { name: 'Inquiry' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Inquiry List' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Name' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Email' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Message' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Sent on' })).toBeVisible();
});