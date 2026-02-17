// Playwright E2E test for the 7-step configurator happy path
// Run: npx playwright test tests/e2e/configurator.spec.js
const { test, expect } = require('playwright/test');

const BASE_URL = 'file://' + require('path').resolve(__dirname, '../../index.html');

test.describe('Configurator — Happy Path', () => {

  test('completes 7-step trip builder flow', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');

    // Step 1: Panel should show destination selection
    const panel = page.locator('#cfgPanel');
    await expect(panel).toContainText('Choose Your Destination');

    // Select first destination
    await page.locator('.cfg-dest-card').first().click();

    // Click Next to go to step 2
    const nextBtn = page.locator('#cfgNext');
    await nextBtn.click();
    await expect(panel).toContainText('When Are You Going?');

    // Step 2 → Step 3
    await nextBtn.click();
    await expect(panel).toContainText('Select Your Routes');

    // Select a route if available
    const routeCard = page.locator('.cfg-route-mini').first();
    if (await routeCard.count() > 0) {
      await routeCard.click();
    }

    // Step 3 → Step 4
    await nextBtn.click();
    await expect(panel).toContainText("Where You'll Stay");

    // Select a hotel if available
    const hotelCard = page.locator('.cfg-hotel-card').first();
    if (await hotelCard.count() > 0) {
      await hotelCard.click();
    }

    // Step 4 → Step 5
    await nextBtn.click();
    await expect(panel).toContainText('Getting There');

    // Step 5 → Step 6
    await nextBtn.click();
    await expect(panel).toContainText('Services');

    // Step 6 → Step 7
    await nextBtn.click();
    await expect(panel).toContainText('Trip Review');

    // Sidebar should show summary
    const sidebar = page.locator('#cfgSidebar');
    await expect(sidebar).toContainText('Trip Summary');
    await expect(sidebar).toContainText('Est. Total');
  });

  test('sidebar updates when selecting accommodation', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');

    // Select destination
    await page.locator('.cfg-dest-card').first().click();

    // Navigate to step 4
    const nextBtn = page.locator('#cfgNext');
    await nextBtn.click(); // → step 2
    await nextBtn.click(); // → step 3
    await nextBtn.click(); // → step 4

    const sidebar = page.locator('#cfgSidebar');

    // Select a hotel
    const hotelCard = page.locator('.cfg-hotel-card').first();
    if (await hotelCard.count() > 0) {
      await hotelCard.click();
      // Sidebar should show Accommodation section
      await expect(sidebar).toContainText('Accommodation');
    }
  });

  test('step navigation works (back and forward)', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');

    const panel = page.locator('#cfgPanel');

    // Select destination
    await page.locator('.cfg-dest-card').first().click();

    // Advance to step 2
    await page.locator('#cfgNext').click();
    await expect(panel).toContainText('When Are You Going?');

    // Advance to step 3
    await page.locator('#cfgNext').click();
    await expect(panel).toContainText('Select Your Routes');

    // Go back to step 2
    await page.locator('#cfgPrev').click();
    await expect(panel).toContainText('When Are You Going?');
  });

  test('Golden Key mode toggle works', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');

    // Enable Golden Key mode
    const gkCheckbox = page.locator('#cfgGkToggle input[type="checkbox"]');
    await gkCheckbox.check();

    // Select destination and go to review
    await page.locator('.cfg-dest-card').first().click();
    const nextBtn = page.locator('#cfgNext');
    for (let i = 0; i < 6; i++) await nextBtn.click();

    // Review should mention Golden Key
    const panel = page.locator('#cfgPanel');
    await expect(panel).toContainText('Golden Key');
  });
});
