import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display Hero component and main heading', async ({ page }) => {
    // The Hero component likely contains a background image or prominent feature
    await expect(page.locator('div')).toHaveClass(/flex-col/);
    // Main heading
    await expect(page.getByRole('heading', { name: /Healthcare and Security, Hand in Hand/i })).toBeVisible();
  });

  test('should display the tagline paragraph', async ({ page }) => {
    const tagline = 'At CareShield, we believe every connection to your health should feel safe, simple, and empowering.';
    await expect(page.getByText(tagline, { exact: false })).toBeVisible();
  });

  test('should have accessible heading structure', async ({ page }) => {
    // There should be at least one h2 heading as per Home.tsx
    await expect(page.locator('h2').filter({ hasText: /healthcare and security/i })).toHaveCount(1);
  });

  test('should have white background and correct layout', async ({ page }) => {
    const mainDiv = page.locator('div').first();
    const bg = await mainDiv.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // Accept any white-ish color
    expect(["rgb(255, 255, 255)", "#ffffff"].some(val => bg.includes(val))).toBeTruthy();
  });

  test('should not have horizontal scroll', async ({ page }) => {
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.body.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1); // allow 1px tolerance
  });
});
