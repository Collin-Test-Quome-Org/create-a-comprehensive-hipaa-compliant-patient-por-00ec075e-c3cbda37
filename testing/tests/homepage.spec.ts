import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders the Hero component (brand hero image)', async ({ page }) => {
    // The Hero component likely contains the hero image as a background
    // Check if a div with the hero image background exists
    const heroDiv = page.locator('[style*="/branding/assets/hero-0.png"]');
    await expect(heroDiv).toBeVisible();
  });

  test('renders headline and subheading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Healthcare and Security, Hand in Hand' })).toBeVisible();
    await expect(
      page.getByText(
        /At CareShield, we believe every connection to your health should feel safe, simple, and empowering.\s+Join a community where trust is built in, and clarity is always at the forefront./
      )
    ).toBeVisible();
  });

  test('page has expected structure and accessibility basics', async ({ page }) => {
    // Main container should be present
    await expect(page.locator('div.flex.flex-col')).toBeVisible();
    // Heading should have correct font
    const heading = page.getByRole('heading', { name: 'Healthcare and Security, Hand in Hand' });
    await expect(heading).toHaveClass(/font-bold/);
    // Paragraph should be centered
    const paragraph = page.getByText('At CareShield, we believe every connection to your health should feel safe, simple, and empowering.', { exact: false });
    await expect(paragraph).toHaveClass(/text-center/);
  });

  test('navigation bar is present on home page', async ({ page }) => {
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.getByText('Medivault')).toBeVisible();
  });
});
