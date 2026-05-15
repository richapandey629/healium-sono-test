import { test, expect } from '@playwright/test';

test('Add Radiologist Test', async ({ page }) => {
  // 1. Generate unique data for every run
  const timestamp = Date.now().toString();
  const uniquePhone = timestamp.slice(-10); 
  const uniqueEmail = `dr.test_${timestamp.slice(-5)}@gmail.com`;
  const uniqueName = `Dr. New_${timestamp.slice(-5)}`;

  await page.goto('https://app.healiumsono.com/');

  // Login
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('admin@healiumsono.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Admin@healiumsono1234');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'Radiologists' }).click();
  await page.getByRole('button', { name: 'Add Radiologist' }).click();

  await page.getByRole('textbox', { name: 'Radiologist Name *' }).fill(uniqueName);
  await page.getByRole('textbox', { name: 'Email *' }).fill(uniqueEmail);
  await page.getByRole('textbox', { name: 'Phone' }).fill(uniquePhone); // Uses the unique 10-digit string
  
  await page.getByRole('button', { name: 'Create Radiologist' }).click();

  await expect(page.getByText(/successfully/i)).toBeVisible({ timeout: 15000 });
});