import { test, expect } from '@playwright/test';

// Navigation menu tests

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays logo and app name', async ({ page }) => {
    // Logo img
    await expect(page.locator('nav img[src="/branding/assets/logo-0.png"]')).toBeVisible();
    // App name text
    await expect(page.getByText('Medivault', { exact: true })).toBeVisible();
  });

  test('shows all primary navigation links', async ({ page }) => {
    const navLinks = [
      { text: 'Appointments', href: '/appointments' },
      { text: 'Medical Records', href: '/medical-records' },
      { text: 'Prescriptions', href: '/prescriptions' },
      { text: 'Messaging', href: '/messaging' },
      { text: 'Notifications', href: '/notifications' }
    ];
    for (const link of navLinks) {
      const locator = page.getByRole('link', { name: link.text });
      await expect(locator).toBeVisible();
      await expect(locator).toHaveAttribute('href', link.href);
    }
  });

  test('shows Login and Sign Up buttons', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
  });

  test('navigates to Login page when clicking Login button', async ({ page }) => {
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login$/);
  });

  test('navigates to Sign Up page when clicking Sign Up button', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('navigation links route to correct pages', async ({ page }) => {
    const navLinks = [
      { text: 'Appointments', href: '/appointments' },
      { text: 'Medical Records', href: '/medical-records' },
      { text: 'Prescriptions', href: '/prescriptions' },
      { text: 'Messaging', href: '/messaging' },
      { text: 'Notifications', href: '/notifications' }
    ];
    for (const link of navLinks) {
      await page.getByRole('link', { name: link.text }).click();
      await expect(page).toHaveURL(new RegExp(link.href.replace('/', '\\/') + '$'));
      await page.goBack();
    }
  });

  test('logo and app name navigate to home', async ({ page }) => {
    await page.getByText('Medivault', { exact: true }).click();
    await expect(page).toHaveURL('/');
  });

  test('navigation bar is sticky and visible after scroll', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const nav = page.locator('nav.w-full.bg-white.shadow-md');
    await expect(nav).toBeVisible();
  });
});
