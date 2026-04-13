import { test, expect } from '@playwright/test';
import * as path from 'path'; // We use this to handle the file path correctly

test('Upload Ultrasound Case - Successful Flow', async ({ page }) => {
  // 1. Navigate and Login
  await page.goto('https://app.healiumsono.com/');
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('abchospital@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@Hospital123');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // 2. Navigate to Upload Case
  await page.getByRole('link', { name: 'Upload Case' }).click();
  await expect(page.getByRole('heading', { name: 'Case Management' })).toBeVisible();

  // 3. Open Modal and Upload File
  await page.getByRole('button', { name: 'Upload New Case' }).click();
  await expect(page.getByRole('heading', { name: 'Upload Ultrasound Case' })).toBeVisible();

  // --- THE FILE PATH FIX ---
  // We use path.resolve to turn your local path into something Playwright understands
  const filePath = path.resolve('tests/left_kidney.jpg');
  await page.setInputFiles('input[type="file"]', filePath);

  // 4. Fill Patient Information (Cleaned up)
  await page.getByRole('textbox', { name: 'Patient ID *' }).fill('101');
  await page.getByRole('textbox', { name: 'Patient Name *' }).fill('Shikha');
  await page.getByRole('spinbutton', { name: 'Age *' }).fill('21');
  await page.getByLabel('Gender *').selectOption('F');

  // 5. Fill Case Details
  await page.getByLabel('Exam Type *').selectOption('Renal');
  await page.getByRole('textbox', { name: 'Indication *' }).fill('abcd');
  await page.getByRole('textbox', { name: 'Referring Physician *' }).fill('Dr. Richa');

  // 6. Submit and Capture Screenshot for Report
  await page.getByRole('button', { name: 'Create Case' }).click();

  // Wait for the success message to appear
  const successHeading = page.getByRole('heading', { name: 'Case Created Successfully!' });
  await expect(successHeading).toBeVisible({ timeout: 15000 });

  // Take the screenshot before clicking continue
  await page.screenshot({ 
    path: `test-results/case-upload/case-101-success.png`, 
    fullPage: true 
  });

  // 7. Finish
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('heading', { name: 'Case Management' })).toBeVisible();
});