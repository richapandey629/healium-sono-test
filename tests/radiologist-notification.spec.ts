import { test, expect } from '@playwright/test';

test('Notifications radiologist test', async ({ page }) => {
  // Recording...
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
  await page.getByRole('link', { name: 'Notification Unread' }).click();
  await expect(page.getByRole('link', { name: 'Notification Unread' })).toBeVisible();
  await expect(page.getByText('Recent uploads')).toBeVisible();
  await page.getByRole('button', { name: 'Mark as read' }).first().click();
  await page.getByRole('button', { name: 'Remove' }).first().click();
  await page.getByRole('button', { name: 'Remove' }).first().click();
  await page.getByRole('button', { name: 'Remove' }).first().click();
  await expect(page.getByText('Recent uploads')).toBeVisible();
});