import { test, expect } from '@playwright/test';

test('Admin Demo Bookings Test', async ({ page }) => {
  await page.goto('https://app.healiumsono.com/');
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('admin@healiumsono.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('A');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Admin@healiumsono1234');
  await page.locator('[id="_R_6l5fdb_-form-item"]').getByRole('button').click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Demo Bookings' }).click();
  await expect(page.getByRole('heading', { name: 'Demo Bookings' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Contact Person' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Company' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Email Address' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Phone Number' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Message' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Date Booked' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Source' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Demo Bookings' })).toBeVisible();
});