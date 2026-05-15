import { test, expect } from '@playwright/test';

test('Radiologist Teleguidance Test', async ({ page }) => {
  // 1. Professional Login (Removed redundant clicks/CapsLock)
  await page.goto('https://app.healiumsono.com/'); 
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('richa@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@Radiologist123');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // 2. Navigation
  await page.getByRole('link', { name: 'TeleGuidance' }).click();
  await expect(page.getByRole('heading', { name: 'Teleguidance' })).toBeVisible();

  // 3. Dynamic Button Matching (Regex ignores the number in brackets)
  const upcomingTab = page.getByRole('button', { name: /Upcoming/i });
  const missedTab = page.getByRole('button', { name: /Missed/i });
  const historyTab = page.getByRole('button', { name: /History/i });

  // 4. Interaction and Verification
  await expect(upcomingTab).toBeVisible();
  
  await missedTab.click();
  await expect(missedTab).toBeVisible();

  await historyTab.click();
  await expect(historyTab).toBeVisible();

  await upcomingTab.click();
  
  // 5. Verify Content Sections
  await expect(page.getByRole('heading', { name: 'Upcoming Sessions' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sessions', exact: true })).toBeVisible();
});