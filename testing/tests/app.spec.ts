import { test, expect } from '@playwright/test';

// App fallback loader page (from App.tsx)
test.describe('App Loading Fallback', () => {
  test('should show loading skeleton and message on root route', async ({ page }) => {
    await page.goto('/');
    // The loader fallback text is present only in the fallback
    await expect(page.getByRole('heading', { name: /we are building your app/i })).toBeVisible();
    await expect(page.getByText(/just a moment/i)).toBeVisible();
    // Skeleton elements exist
    await expect(page.locator('.animate-pulse')).toBeVisible();
    await expect(page.locator('.h-4')).toHaveCount(2);
    await expect(page.locator('.h-\[125px\]')).toBeVisible();
  });
});
