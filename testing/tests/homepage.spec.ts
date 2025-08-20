import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays the Hero component (background image)', async ({ page }) => {
    // Should have an element with the background image hero-0.png
    const heroSection = page.locator('[style*="hero-0.png"]');
    await expect(heroSection).toBeVisible();
  });

  test('shows the main headline and supporting paragraph', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 2, name: 'Healthcare and Security, Hand in Hand' })).toBeVisible();
    await expect(page.locator('p:has-text("every connection to your health should feel safe, simple, and empowering")')).toBeVisible();
  });

  test('headline uses correct font, color and weight', async ({ page }) => {
    const h2 = page.getByRole('heading', { level: 2, name: 'Healthcare and Security, Hand in Hand' });
    await expect(h2).toHaveCSS('font-family', /Roboto/);
    await expect(h2).toHaveCSS('color', /rgb\(30, 58, 138\)|#1d4ed8/i); // blue-900
    await expect(h2).toHaveCSS('font-weight', /700/);
  });

  test('hero section content is centered and responsive', async ({ page }) => {
    const section = page.locator('section.container');
    await expect(section).toHaveClass(/flex-col/);
    await expect(section).toHaveClass(/items-center/);
    await expect(section).toBeVisible();
  });

  test('basic accessibility: headline is a level 2 heading', async ({ page }) => {
    const headings = await page.locator('h2').all();
    expect(headings.length).toBeGreaterThan(0);
    await expect(page.getByRole('heading', { level: 2, name: 'Healthcare and Security, Hand in Hand' })).toBeVisible();
  });
});
