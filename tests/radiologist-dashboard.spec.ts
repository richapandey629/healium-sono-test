import { test, expect } from '@playwright/test';

test('Radiologist Dashboard Test', async ({ page }) => {
  await page.goto('https://www.healiumsono.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('richa@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@R');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@Radiologist123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Welcome back, Richa' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'STAT Cases' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Pending Cases' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Completed Today' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Preliminary Cases' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Recent Activity' })).toBeVisible();

  await page.getByRole('heading', { name: 'Quick Actions' }).click();
  await expect(page.getByRole('heading', { name: 'Upcoming Sessions' })).toBeVisible();
});