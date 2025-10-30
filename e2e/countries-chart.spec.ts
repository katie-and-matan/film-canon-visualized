import { test, expect } from '@playwright/test';

test.describe('Countries Bar Chart', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays chart with default filters', async ({ page }) => {
    await expect(page.getByText('Films by Country of Origin')).toBeVisible();

    // Chart should be visible
    await expect(page.locator('.recharts-wrapper')).toBeVisible();
  });

  test('filters update chart data', async ({ page }) => {
    // Change poll year
    await page.selectOption('select#poll-year', '2022');

    // Wait for chart to update (data should change)
    await page.waitForTimeout(500);

    // Change ranking tier
    await page.click('input[value="top100"]');

    // Wait for chart to update
    await page.waitForTimeout(500);

    // Verify chart still visible
    await expect(page.locator('.recharts-wrapper')).toBeVisible();
  });

  test('top N filter changes number of bars', async ({ page }) => {
    // Select top 5
    await page.click('input[value="5"]');

    // Wait for chart to update
    await page.waitForTimeout(500);

    // Should have 5 or fewer bars
    const bars = await page.locator('.recharts-bar-rectangle').count();
    expect(bars).toBeLessThanOrEqual(5);
  });

  test('chart is responsive', async ({ page }) => {
    // Desktop
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.locator('.recharts-wrapper')).toBeVisible();

    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('.recharts-wrapper')).toBeVisible();
  });
});
