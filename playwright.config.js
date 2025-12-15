// playwright.config.js
const { devices } = require('@playwright/test');
module.exports = {
  testDir: './tests',
  timeout: 60 * 1000,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    headless: true,
    baseURL: 'https://<your-controlroom-host>', // ← replace with the Control Room base URL from your email or current URL root
    viewport: { width: 1280, height: 800 },
    actionTimeout: 10000,
    trace: 'retain-on-failure'
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }]
};
