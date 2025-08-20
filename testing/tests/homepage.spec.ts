import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays hero section and introduction', async ({ page }) => {
    // Hero component: check for hero image background
    const heroImage = page.locator('div[style*="/branding/assets/hero-0.png"]');
    await expect(heroImage).toBeVisible();

    // Headline
    await expect(page.getByRole('heading', { name: 'Healthcare and Security, Hand in Hand' })).toBeVisible();
    // Paragraph
    await expect(
      page.getByText(
        'At CareShield, we believe every connection to your health should feel safe, simple, and empowering.',
        { exact: false }
      )
    ).toBeVisible();
  });

  test('has accessible headings and text', async ({ page }) => {
    // There should be only one h2 with the main headline
    const headline = page.locator('h2', { hasText: 'Healthcare and Security, Hand in Hand' });
    await expect(headline).toHaveCount(1);
    // Ensure it has the correct font-family (Roboto)
    const font = await headline.evaluate(el => getComputedStyle(el).fontFamily);
    expect(font.toLowerCase()).toContain('roboto');
  });

  test('navigation bar is visible and sticky', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    // Check sticky positioning
    const position = await nav.evaluate(el => getComputedStyle(el).position);
    expect(["sticky", "-webkit-sticky"]).toContain(position);
  });
});
