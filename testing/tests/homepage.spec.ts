import { test, expect } from '@playwright/test';

// Tests for the Home page and hero section

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Hero component (background image)', async ({ page }) => {
    // Check for hero image background on the page
    const heroDiv = page.locator('[style*="/branding/assets/hero-0.png"]');
    await expect(heroDiv).toBeVisible();
  });

  test('should display main headline in Home section', async ({ page }) => {
    const headline = page.getByRole('heading', { name: /Healthcare and Security, Hand in Hand/i });
    await expect(headline).toBeVisible();
    await expect(headline).toHaveClass(/font-bold/);
  });

  test('should display supporting paragraph about CareShield', async ({ page }) => {
    const paraText = "At CareShield, we believe every connection to your health should feel safe, simple, and empowering. Join a community where trust is built in, and clarity is always at the forefront.";
    await expect(page.getByText(paraText, { exact: false })).toBeVisible();
  });

  test('should have accessible headings structure', async ({ page }) => {
    // h2 in the animated section
    const h2 = page.getByRole('heading', { name: /Healthcare and Security, Hand in Hand/i, level: 2 });
    await expect(h2).toBeVisible();
  });

  test('should be visually complete (no skeleton loader)', async ({ page }) => {
    // Home page should not show the skeleton loader from App fallback
    const skeleton = page.locator('.animate-pulse');
    await expect(skeleton).toHaveCount(0);
  });
});
