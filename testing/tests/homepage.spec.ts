import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders Hero section', async ({ page }) => {
    // The Hero section is rendered as the first child; look for the hero image background
    const hero = page.locator('div').filter({ has: page.locator('img[src^="/branding/assets/hero-0.png"], [style*="hero-0.png"]') });
    // If Hero has background image, check there's a section with the right style
    // fallback: check for h1 in hero overlay, or fallback to any hero-0.png in style
    const heroImgDiv = page.locator('[style*="/branding/assets/hero-0.png"]');
    await expect(heroImgDiv).toBeVisible();
  });

  test('renders main message headline', async ({ page }) => {
    const headline = page.getByRole('heading', { name: 'Healthcare and Security, Hand in Hand', level: 2 });
    await expect(headline).toBeVisible();
    await expect(headline).toHaveClass(/font-bold/);
    // Should have correct color (blue-900)
    const color = await headline.evaluate(el => window.getComputedStyle(el).color);
    expect(["rgb(30, 58, 138)", "#1e3a8a"].some(c => color.includes(c))).toBeTruthy();
  });

  test('renders descriptive paragraph', async ({ page }) => {
    await expect(
      page.getByText(
        /At CareShield, we believe every connection to your health should feel safe, simple, and empowering\./
      )
    ).toBeVisible();
  });

  test('main section animates in (opacity/transform)', async ({ page }) => {
    // Wait for animation: opacity should be 1, transform should not be translated
    const section = page.locator('section').filter({ has: page.getByRole('heading', { name: /Healthcare and Security/ }) });
    await section.waitFor();
    const opacity = await section.evaluate(el => window.getComputedStyle(el).opacity);
    expect(Number(opacity)).toBeCloseTo(1, 1);
    const transform = await section.evaluate(el => window.getComputedStyle(el).transform);
    // Should be either 'none' or matrix with y=0
    expect(transform === 'none' || transform.endsWith(', 0)')).toBeTruthy();
  });

  test('page uses correct background color', async ({ page }) => {
    const rootDiv = page.locator('div').first();
    const bg = await rootDiv.evaluate(el => window.getComputedStyle(el).backgroundColor);
    expect(["rgb(255, 255, 255)", "#ffffff"].some(c => bg.includes(c))).toBeTruthy();
  });

  test('basic accessibility: headings and contrast', async ({ page }) => {
    // Headline role
    await expect(page.getByRole('heading', { name: 'Healthcare and Security, Hand in Hand' })).toBeVisible();
    // All links/button in nav are accessible
    for (const navText of [
      'Medivault', 'Appointments', 'Medical Records', 'Prescriptions', 'Messaging', 'Notifications', 'Login', 'Sign Up',
    ]) {
      await expect(page.getByRole('link', { name: navText }).or(page.getByRole('button', { name: navText }))).toBeVisible();
    }
  });
});
