import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.healiumsono.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('R');
  await page.getByRole('textbox', { name: 'Enter your email' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('richa@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@R');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@Radiologist123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Analytics', exact: true }).click();
  await expect(page.getByRole('textbox', { name: 'Search by patient, physician' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'PATIENT' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Study Details' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'CASE DATE' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Physician' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'STATUS' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Actions' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Analytics' })).toBeVisible();

});