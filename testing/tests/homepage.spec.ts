import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders the Hero section', async ({ page }) => {
    // The Hero is rendered at the top of the Home page
    // We do not know its exact structure, but we do expect a hero image (from branding)
    // That image is at /branding/assets/hero-0.png
    await expect(
      page.locator('div[style*="/branding/assets/hero-0.png"]')
    ).toBeVisible();
  });

  test('shows the main headline', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Healthcare and Security, Hand in Hand', level: 2 })
    ).toBeVisible();
  });

  test('shows the supporting paragraph', async ({ page }) => {
    await expect(
      page.getByText(
        /we believe every connection to your health should feel safe, simple, and empowering/i
      )
    ).toBeVisible();
  });

  test('layout is centered and minimum height is correct', async ({ page }) => {
    const rootDiv = page.locator('div.flex.flex-col');
    await expect(rootDiv).toBeVisible();
    const minHeight = await rootDiv.evaluate((el) => window.getComputedStyle(el).minHeight);
    expect(minHeight).toMatch(/calc\(100vh-64px\)/);
  });

  test('has accessible headings', async ({ page }) => {
    // There should be a level-2 heading for the main headline
    const headings = await page.locator('h2, h1').allTextContents();
    expect(
      headings.some((h) => h.includes('Healthcare and Security, Hand in Hand'))
    ).toBeTruthy();
  });
});
