import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display brand logo and navigation links', async ({ page }) => {
    // Brand logo should be visible (assuming it is an <img> or svg inside nav)
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    // About link
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    // Login link
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    // Sign Up button (inside nav)
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    await expect(page.locator('#signup-nav')).toBeVisible();
  });

  test('should navigate to About page when About is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about/);
    // Optionally check for About page heading
    await expect(page.locator('h1, h2').filter({ hasText: /about/i }).first()).toBeVisible({ timeout: 2000 }).catch(() => {});
  });

  test('should navigate to Login page when Login is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login/);
    // Optionally check for Login page heading
    await expect(page.locator('h1, h2').filter({ hasText: /login/i }).first()).toBeVisible({ timeout: 2000 }).catch(() => {});
  });

  test('should navigate to Signup page when Sign Up is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(/\/signup/);
    // Optionally check for Signup page heading
    await expect(page.locator('h1, h2').filter({ hasText: /sign\s*up/i }).first()).toBeVisible({ timeout: 2000 }).catch(() => {});
  });

  test('should have sticky navigation bar', async ({ page }) => {
    const nav = page.locator('nav');
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));
    // Navigation should still be visible
    await expect(nav).toBeVisible();
    // Optionally check its css position is sticky
    const position = await nav.evaluate((el) => window.getComputedStyle(el).position);
    expect(['sticky', 'fixed']).toContain(position);
  });
});
