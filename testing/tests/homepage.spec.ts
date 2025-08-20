import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays hero section', async ({ page }) => {
    // The Hero component is rendered at the top
    // Look for the hero image background
    const heroSection = page.locator('div[style*="/branding/assets/hero-0.png"]');
    await expect(heroSection).toBeVisible();
  });

  test('shows main heading and description', async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'Healthcare and Security, Hand in Hand', level: 2 });
    await expect(heading).toBeVisible();
    const description = page.getByText(
      /At CareShield, we believe every connection to your health should feel safe, simple, and empowering.\s+Join a community where trust is built in, and clarity is always at the forefront./
    );
    await expect(description).toBeVisible();
  });

  test('main heading uses correct font and color', async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'Healthcare and Security, Hand in Hand', level: 2 });
    // Check computed style
    const styles = await heading.evaluate((el) => {
      const cs = window.getComputedStyle(el);
      return {
        fontFamily: cs.fontFamily,
        color: cs.color,
        fontWeight: cs.fontWeight,
      };
    });
    expect(styles.fontFamily).toMatch(/Roboto/);
    // Brand primary color: #1d4ed8 (text-blue-900)
    expect(styles.color.replace(/\s/g, '').toLowerCase()).toMatch(/#1d4ed8|rgb\(29,78,216\)/);
    expect(Number(styles.fontWeight)).toBeGreaterThanOrEqual(700);
  });

  test('page is accessible: no obvious accessibility violations', async ({ page }) => {
    // Check for proper heading structure and role
    await expect(page.getByRole('heading', { level: 2 })).toBeVisible();
    // Check for only one main landmark
    const mainLandmarks = await page.locator('main').count();
    expect(mainLandmarks).toBeLessThanOrEqual(1);
  });
});
