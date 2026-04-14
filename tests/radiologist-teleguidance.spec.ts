import { test, expect } from '@playwright/test';

test('Radiologist Teleguidance Test', async ({ page }) => {
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
  await page.getByRole('link', { name: 'TeleGuidance' }).click();
  await expect(page.getByRole('heading', { name: 'Teleguidance' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Upcoming (6)' })).toBeVisible();
  await page.getByRole('button', { name: 'Missed (1)' }).click();
  await expect(page.getByRole('button', { name: 'Missed (1)' })).toBeVisible();
  await page.getByRole('button', { name: 'History (0)' }).click();
  await expect(page.getByRole('button', { name: 'History (0)' })).toBeVisible();
  await page.getByRole('button', { name: 'Upcoming (6)' }).click();
  await expect(page.getByRole('button', { name: 'Upcoming (6)' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Upcoming Sessions' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sessions', exact: true })).toBeVisible();
  await page.getByRole('heading', { name: 'Teleguidance' }).click();
});