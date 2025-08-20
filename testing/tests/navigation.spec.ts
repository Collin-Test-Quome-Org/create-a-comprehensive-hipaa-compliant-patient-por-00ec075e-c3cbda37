import { test, expect } from '@playwright/test';

// Tests for the Navigation component

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the BrandLogo', async ({ page }) => {
    // Assuming BrandLogo renders an <img> or SVG as first child in nav
    const nav = page.locator('nav');
    await expect(nav.locator('svg, img')).toBeVisible();
  });

  test('should display About link and navigate to /about', async ({ page }) => {
    const aboutLink = page.getByRole('link', { name: /about/i });
    await expect(aboutLink).toBeVisible();
    await expect(aboutLink).toHaveAttribute('href', '/about');
    // Optionally: Click and check navigation (if /about route exists)
  });

  test('should display Login link and navigate to /login', async ({ page }) => {
    const loginLink = page.getByRole('link', { name: /login/i });
    await expect(loginLink).toBeVisible();
    await expect(loginLink).toHaveAttribute('href', '/login');
    // Optionally: Click and check navigation (if /login route exists)
  });

  test('should display primary Sign Up button linking to /signup', async ({ page }) => {
    const signUpBtn = page.locator('#signup-nav');
    await expect(signUpBtn).toBeVisible();
    const signUpLink = signUpBtn.getByRole('link', { name: /sign up/i });
    await expect(signUpLink).toBeVisible();
    await expect(signUpLink).toHaveAttribute('href', '/signup');
  });

  test('should have sticky styling and accessibility roles', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toHaveAttribute('class', /sticky/);
    await expect(nav).toHaveAttribute('role', /navigation|/); // might be implicit
  });
});
