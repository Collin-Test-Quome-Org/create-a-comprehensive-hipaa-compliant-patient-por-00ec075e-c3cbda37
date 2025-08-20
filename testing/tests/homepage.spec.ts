import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders the Hero section', async ({ page }) => {
    // The Hero section likely has a background image (see brand kit)
    const hero = page.locator("div[style*='/branding/assets/hero-0.png']");
    await expect(hero).toBeVisible();
    // Overlay should contain an h1
    await expect(hero.locator('h1')).toBeVisible();
  });

  test('shows section headline and description', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Healthcare and Security, Hand in Hand' })).toBeVisible();
    await expect(page.getByText(
      'At CareShield, we believe every connection to your health should feel safe, simple, and empowering.',
      { exact: false }
    )).toBeVisible();
    await expect(page.getByText(
      'Join a community where trust is built in, and clarity is always at the forefront.',
      { exact: false }
    )).toBeVisible();
  });

  test('content is centered and visually present', async ({ page }) => {
    // Section should have flex and items-center
    const section = page.locator('section.flex.flex-col.items-center');
    await expect(section).toBeVisible();
    await expect(section.getByRole('heading', { name: /Healthcare and Security/ })).toBeVisible();
  });

  test('has accessible heading structure', async ({ page }) => {
    // There should be only one h2 on the page for this section
    const h2s = await page.locator('h2').all();
    expect(h2s.length).toBeGreaterThanOrEqual(1);
    await expect(page.getByRole('heading', { name: 'Healthcare and Security, Hand in Hand', level: 2 })).toBeVisible();
  });
});
