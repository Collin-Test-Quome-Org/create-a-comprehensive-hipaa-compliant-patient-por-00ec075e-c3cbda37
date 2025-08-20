import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays Hero section', async ({ page }) => {
    // Hero is the first child - check for expected structure
    const heroDiv = page.locator('div').first();
    // The Hero component likely contains branding imagery or introductory content, but we check presence
    await expect(heroDiv).toBeVisible();
  });

  test('shows main heading and subtitle', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Healthcare and Security, Hand in Hand/i })).toBeVisible();
    await expect(page.getByText(/At CareShield, we believe every connection to your health should feel safe, simple, and empowering\./i)).toBeVisible();
    await expect(page.getByText(/Join a community where trust is built in, and clarity is always at the forefront\./i)).toBeVisible();
  });

  test('main section animates in (opacity check)', async ({ page }) => {
    // The section should end up with opacity 1 after animation
    const section = page.locator('section.container');
    await expect(section).toBeVisible();
    // Playwright can't directly check framer-motion animation, but can check final style
    const opacity = await section.evaluate((el) => window.getComputedStyle(el).opacity);
    expect(Number(opacity)).toBeGreaterThan(0.95);
  });

  test('responsive layout classes are present', async ({ page }) => {
    const section = page.locator('section.container');
    await expect(section).toHaveClass(/flex/);
    await expect(section).toHaveClass(/items-center/);
    await expect(section).toHaveClass(/px-4/);
    await expect(section).toHaveClass(/py-16/);
  });

  test('accessibility: heading and content roles', async ({ page }) => {
    // There should be a level 2 heading
    const h2 = page.getByRole('heading', { level: 2, name: /Healthcare and Security, Hand in Hand/i });
    await expect(h2).toBeVisible();
    // Paragraph text should exist
    await expect(page.getByText(/CareShield/)).toBeVisible();
  });
});
