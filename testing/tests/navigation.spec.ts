import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders the BrandLogo and navigation links', async ({ page }) => {
    // BrandLogo is the first image/logo on the navbar
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    await expect(nav.locator('img')).toBeVisible();

    // About link
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    // Login link
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    // Sign Up button
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
  });

  test('navigates to About page when About is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about$/);
    // Should see the About page heading
    await expect(page.locator('h1, h2')).toContainText(['About']);
  });

  test('navigates to Login page when Login is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login$/);
    await expect(page.locator('h1, h2')).toContainText(['Login']);
  });

  test('navigates to Sign Up page when Sign Up is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(/\/signup$/);
    await expect(page.locator('h1, h2')).toContainText(['Sign Up']);
  });
});
