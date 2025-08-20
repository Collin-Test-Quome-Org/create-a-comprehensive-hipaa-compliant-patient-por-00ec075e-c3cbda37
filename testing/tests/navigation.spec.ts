import { test, expect } from '@playwright/test';

// Helper to match navigation links by their visible text
const navLinks = [
  { label: 'Medivault', path: '/' },
  { label: 'Appointments', path: '/appointments' },
  { label: 'Medical Records', path: '/medical-records' },
  { label: 'Prescriptions', path: '/prescriptions' },
  { label: 'Messaging', path: '/messaging' },
  { label: 'Notifications', path: '/notifications' },
];

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays site logo and title', async ({ page }) => {
    const logoImg = page.locator('nav img[src="/branding/assets/logo-0.png"]');
    await expect(logoImg).toBeVisible();
    await expect(page.getByRole('link', { name: /Medivault/ })).toBeVisible();
  });

  for (const { label, path } of navLinks) {
    test(`navigation link "${label}" navigates to ${path}`, async ({ page }) => {
      const link = page.getByRole('link', { name: new RegExp(label) });
      await expect(link).toBeVisible();
      await link.click();
      // Confirm navigation
      await expect(page).toHaveURL((url) => url.pathname === path);
    });
  }

  test('Login and Sign Up buttons are visible and navigate', async ({ page }) => {
    const loginBtn = page.locator('#nav-login');
    const signupBtn = page.locator('#nav-signup');
    await expect(loginBtn).toBeVisible();
    await expect(signupBtn).toBeVisible();

    // Test Login navigation
    await loginBtn.click();
    await expect(page).toHaveURL((url) => url.pathname === '/login');

    // Go back to home
    await page.goto('/');
    // Test Sign Up navigation
    await signupBtn.click();
    await expect(page).toHaveURL((url) => url.pathname === '/signup');
  });

  test('navigation bar is sticky at the top', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toHaveClass(/sticky/);
    await expect(nav).toBeVisible();
  });
});
