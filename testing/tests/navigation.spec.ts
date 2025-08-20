import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders logo and site name', async ({ page }) => {
    // Logo image (should be present)
    const logo = page.locator('nav img[src="/branding/assets/logo-0.png"]');
    await expect(logo).toBeVisible();
    // Site name text
    await expect(page.getByRole('link', { name: /Medivault/i })).toBeVisible();
  });

  test('has navigation links to main pages', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Appointments/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Medical Records/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Prescriptions/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Messaging/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Notifications/i })).toBeVisible();
  });

  test('has login and signup buttons', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Login/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Sign Up/i })).toBeVisible();
    // Buttons should be visible and clickable
    await expect(page.locator('#nav-login')).toBeVisible();
    await expect(page.locator('#nav-signup')).toBeVisible();
  });

  test('navigates to Appointments page when clicked', async ({ page }) => {
    await page.getByRole('link', { name: /Appointments/i }).click();
    await expect(page).toHaveURL(/\/appointments$/);
  });

  test('navigates to Medical Records page when clicked', async ({ page }) => {
    await page.getByRole('link', { name: /Medical Records/i }).click();
    await expect(page).toHaveURL(/\/medical-records$/);
  });

  test('navigates to Prescriptions page when clicked', async ({ page }) => {
    await page.getByRole('link', { name: /Prescriptions/i }).click();
    await expect(page).toHaveURL(/\/prescriptions$/);
  });

  test('navigates to Messaging page when clicked', async ({ page }) => {
    await page.getByRole('link', { name: /Messaging/i }).click();
    await expect(page).toHaveURL(/\/messaging$/);
  });

  test('navigates to Notifications page when clicked', async ({ page }) => {
    await page.getByRole('link', { name: /Notifications/i }).click();
    await expect(page).toHaveURL(/\/notifications$/);
  });

  test('navigates to Login and Signup pages from buttons', async ({ page }) => {
    await page.locator('#nav-login').getByRole('link', { name: /Login/i }).click();
    await expect(page).toHaveURL(/\/login$/);
    await page.goto('/');
    await page.locator('#nav-signup').getByRole('link', { name: /Sign Up/i }).click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('navigation bar is sticky at the top', async ({ page }) => {
    const nav = page.locator('nav');
    const boundingBox = await nav.boundingBox();
    expect(boundingBox?.y).toBeLessThan(10); // Should be at the top
    // Scroll and check nav is visible
    await page.evaluate(() => window.scrollBy(0, 1000));
    await expect(nav).toBeVisible();
  });
});
