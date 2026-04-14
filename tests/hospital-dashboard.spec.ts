import { test, expect } from '@playwright/test';

test('Hospital Dashboard Test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.healiumsono.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('abchospital@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@H');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@Hospital123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByText('Total Cases')).toBeVisible();
  await expect(page.getByText('Interpreted')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Search by patient name or' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Uploaded Cases' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'PATIENT & CASE' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'CASE DATE' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'STATUS' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'RADIOLOGIST' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Chat' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Files' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Actions' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
});