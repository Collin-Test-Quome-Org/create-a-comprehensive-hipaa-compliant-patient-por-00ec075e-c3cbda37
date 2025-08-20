import { test, expect } from '@playwright/test';

// Tests for the Navigation bar, links, and navigation behavior

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the BrandLogo', async ({ page }) => {
    // BrandLogo is likely an <img> or svg inside the nav
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    // There's no alt text, so match for img/svg presence
    await expect(
      nav.locator('img, svg')
    ).toBeVisible();
  });

  test('should display About, Login, and Sign Up links', async ({ page }) => {
    // About link
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    // Login link
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    // Sign Up button (as link inside button)
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    // The button should have id="signup-nav"
    await expect(page.locator('button#signup-nav')).toBeVisible();
  });

  test('should navigate to About page when About is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about$/);
    // The About page should have some unique content - fallback to heading check
    // You may adjust this selector/content as needed
    await expect(page.locator('h1, h2', { hasText: 'About' })).toBeVisible({ timeout: 2000 });
  });

  test('should navigate to Login page when Login is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login$/);
    // Check that there is a heading or form for login
    await expect(page.locator('h1, h2', { hasText: /login/i })).toBeVisible({ timeout: 2000 });
  });

  test('should navigate to Signup page when Sign Up is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(/\/signup$/);
    await expect(page.locator('h1, h2', { hasText: /sign up/i })).toBeVisible({ timeout: 2000 });
  });
});
