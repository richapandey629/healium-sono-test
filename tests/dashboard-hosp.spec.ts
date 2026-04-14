import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://app.healiumsono.com/');
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('abchospital@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@Hospital123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByText('Healium Sonoby Healium')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByText('Total Cases')).toBeVisible();
  await expect(page.getByText('Interpreted')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Search by patient name or' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Uploaded Cases' })).toBeVisible();
})