import { test, expect } from '@playwright/test';

test('Add Radiologist Test', async ({ page }) => {
  const uniqueEmail = `dr.zyz_${Date.now()}@gmail.com`; // Prevents duplicate entry errors
  
  await page.goto('https://app.healiumsono.com/');
  
  // Login
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('admin@healiumsono.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Admin@healiumsono1234');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Navigate to Radiologists
  await page.getByRole('link', { name: 'Radiologists' }).click();
  await expect(page.getByRole('heading', { name: 'Radiologists' })).toBeVisible();

  // Add New Radiologist
  await page.getByRole('button', { name: 'Add Radiologist' }).click();
  await page.getByRole('textbox', { name: 'Radiologist Name *' }).fill('Dr. Person');
  await page.getByRole('textbox', { name: 'Email *' }).fill('person@gmail.com');
  await page.getByRole('textbox', { name: 'Phone' }).fill('8245690432');
  await page.getByRole('button', { name: 'Create Radiologist' }).click();

  // Assertion: Use regex to handle potential non-breaking spaces and extend timeout
  const successMessage = page.getByText(/Radiologist and user account created successfully/i);
  await expect(successMessage).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole('heading', { name: 'Radiologists' })).toBeVisible();
});