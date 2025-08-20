import { test, expect } from '@playwright/test';

test.describe('Main Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the BrandLogo', async ({ page }) => {
    // Assuming BrandLogo is the first image in the nav
    const logo = page.locator('nav img');
    await expect(logo).toBeVisible();
  });

  test('should have About, Login, and Sign Up links', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  });

  test('Sign Up button should be styled as primary', async ({ page }) => {
    const signUpButton = page.locator('#signup-nav');
    await expect(signUpButton).toBeVisible();
    await expect(signUpButton).toHaveClass(/bg-blue-700/);
  });

  test('navigates to About page when About is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('navigates to Login page when Login is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login/);
  });

  test('navigates to Signup page when Sign Up is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(/\/signup/);
  });

  test('navigation bar is sticky', async ({ page }) => {
    const nav = page.locator('nav');
    // Scroll and check nav is still visible
    await page.evaluate(() => window.scrollBy(0, 500));
    await expect(nav).toBeVisible();
  });
});
