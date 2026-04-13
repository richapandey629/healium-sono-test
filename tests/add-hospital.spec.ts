import { test, expect } from '@playwright/test';

test('Add Hospital - Admin Flow', async ({ page }) => {
  // 1. Login (Simplified - no need for CapsLock lines)
  await page.goto('https://app.healiumsono.com/');
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('admin@healiumsono.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Admin@healiumsono1234');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // 2. Navigate to Hospitals
  await page.getByRole('link', { name: 'Hospitals' }).click();
  await expect(page.getByRole('heading', { name: 'Hospitals' })).toBeVisible();

  // 3. Add Hospital Details
  await page.getByRole('button', { name: 'Add Hospital' }).click();
  
  // Use a unique name each time so you don't get a "Duplicate" error
  const hospitalName = `New Hospital ${Date.now()}`; 
  await page.getByRole('textbox', { name: 'Hospital Name *' }).fill(hospitalName);
  await page.getByRole('textbox', { name: 'Email *' }).fill(`test${Date.now()}@gmail.com`);
  await page.getByRole('textbox', { name: 'Phone' }).fill('9999999999');

  // 4. Submit
  await page.getByRole('button', { name: 'Create Hospital' }).click();

  // --- THE FIX: WAIT FOR SUCCESS ---
  // Look for a success message or wait for the modal to disappear
  // Most Healium pages show a "Created successfully" message
  await expect(page.getByText(/successfully/i)).toBeVisible({ timeout: 10000 });

  // 5. Screenshot for your report
  // This captures the screen showing the new hospital was added
  await page.screenshot({ 
    path: `test-results/hospitals/new-hospital-success.png`, 
    fullPage: true 
  });

  // 6. Final check
  await expect(page.getByRole('heading', { name: 'Hospitals' })).toBeVisible({ timeout: 10000 });
});