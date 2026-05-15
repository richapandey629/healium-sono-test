import { test, expect } from '@playwright/test';

test('case upload test', async ({ page }) => {
  // 1. Login
  await page.goto('https://app.healiumsono.com/');
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('abchospital@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@Hospital123');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // 2. Navigation
  await page.getByRole('link', { name: 'Upload Case' }).click();
  await expect(page.getByRole('heading', { name: 'Case Management' })).toBeVisible();
  await page.getByRole('button', { name: 'Upload New Case' }).click();

  // 3. File Upload (Crucial Fix)
  // We target the hidden 'input' element, not the 'Select Files' button.
  // Since you said the image is in the 'tests' folder, use that path.
  await page.locator('input[type="file"]').first().setInputFiles('tests/Left_Kidney1.jpg');
  // 4. Fill Patient Details
  await page.getByRole('textbox', { name: 'Patient ID *' }).fill('123409');
  await page.getByRole('textbox', { name: 'Patient Name *' }).fill('Richaa');
  await page.getByRole('spinbutton', { name: 'Age *' }).fill('21');
  
  // Select options from dropdowns
  await page.getByLabel('Gender *').selectOption('F');
  await page.getByLabel('Exam Type *').selectOption('Renal');

  await page.getByRole('textbox', { name: 'Indication *' }).fill('testt');
  await page.getByRole('textbox', { name: 'Referring Physician *' }).fill('Richa Pandey');

  // 5. Submit and Verify
  await page.getByRole('button', { name: 'Create Case' }).click();
  
  // Checking for the success message
  await expect(page.getByText('Case Created Successfully!')).toBeVisible({ timeout: 10000 });
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('heading', { name: 'Case Management' })).toBeVisible();
});