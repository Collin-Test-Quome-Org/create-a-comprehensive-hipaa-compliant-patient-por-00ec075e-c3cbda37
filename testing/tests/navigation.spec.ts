import { test, expect } from '@playwright/test';

// Test the Navigation component and all navigation links

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays logo and brand name', async ({ page }) => {
    const logo = page.locator('nav img[src="/branding/assets/logo-0.png"]');
    await expect(logo).toBeVisible();
    const brand = page.getByText('Medivault', { exact: true });
    await expect(brand).toBeVisible();
  });

  test('shows all primary navigation links', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Appointments' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Medical Records' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Prescriptions' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Messaging' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Notifications' })).toBeVisible();
  });

  test('shows Login and Sign Up buttons', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  });

  test('navigates to Appointments page', async ({ page }) => {
    await page.getByRole('link', { name: 'Appointments' }).click();
    await expect(page).toHaveURL(/\/appointments/);
  });

  test('navigates to Medical Records page', async ({ page }) => {
    await page.getByRole('link', { name: 'Medical Records' }).click();
    await expect(page).toHaveURL(/\/medical-records/);
  });

  test('navigates to Prescriptions page', async ({ page }) => {
    await page.getByRole('link', { name: 'Prescriptions' }).click();
    await expect(page).toHaveURL(/\/prescriptions/);
  });

  test('navigates to Messaging page', async ({ page }) => {
    await page.getByRole('link', { name: 'Messaging' }).click();
    await expect(page).toHaveURL(/\/messaging/);
  });

  test('navigates to Notifications page', async ({ page }) => {
    await page.getByRole('link', { name: 'Notifications' }).click();
    await expect(page).toHaveURL(/\/notifications/);
  });

  test('navigates to Login page from Login button', async ({ page }) => {
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login/);
  });

  test('navigates to Sign Up page from Sign Up button', async ({ page }) => {
    await page.getByRole('link', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(/\/signup/);
  });
});
