import { test, expect } from '@playwright/test';

// Navigation links and buttons
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

  test('should render logo and brand name', async ({ page }) => {
    const logo = page.locator('nav img[src="/branding/assets/logo-0.png"]');
    await expect(logo).toBeVisible();
    const brand = page.getByText('Medivault');
    await expect(brand).toBeVisible();
  });

  for (const { label, path } of navLinks) {
    test(`should have navigation link for "${label}" that navigates to ${path}`, async ({ page }) => {
      const link = page.getByRole('link', { name: label });
      await expect(link).toBeVisible();
      await link.click();
      // Wait for navigation (URL pathname check)
      await expect(page).toHaveURL(new RegExp(`${path.replace('/', '\\/')}(\\?.*)?$`));
    });
  }

  test('should have Login and Sign Up buttons', async ({ page }) => {
    const loginBtn = page.getByRole('button', { name: 'Login' });
    const signupBtn = page.getByRole('button', { name: 'Sign Up' });
    await expect(loginBtn).toBeVisible();
    await expect(signupBtn).toBeVisible();
  });

  test('Login button navigates to /login', async ({ page }) => {
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login(\?.*)?$/);
  });

  test('Sign Up button navigates to /signup', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(/\/signup(\?.*)?$/);
  });

  test('navigation is sticky at the top', async ({ page }) => {
    // Scroll the page and verify nav is still visible
    await page.evaluate(() => window.scrollTo(0, 500));
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    // Check sticky position
    const boundingBox = await nav.boundingBox();
    expect(boundingBox?.y).toBeLessThanOrEqual(0);
  });
});
