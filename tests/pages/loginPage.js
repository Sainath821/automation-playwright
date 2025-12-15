// tests/pages/loginPage.js
const { expect } = require('@playwright/test');

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // update selectors if your UI differs
    this.loginBtn = 'text=Log in, button:has-text("Log in"), text=Sign in';
    this.usernameInput = 'input[type="email"], input[name="email"]';
    this.passwordInput = 'input[type="password"], input[name="password"]';
    this.submitBtn = 'button:has-text("Sign in"), button:has-text("Log in")';
    this.profileAvatar = 'header img[alt="profile"], nav >> text=Home';
  }

  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  async login(username, password) {
    // Click login entry (if landing page needs it)
    const loginExists = await this.page.locator(this.loginBtn).count();
    if (loginExists) await this.page.click(this.loginBtn);
    // Fill fields - wait
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle' }),
      this.page.click(this.submitBtn)
    ]);
  }

  async assertLoggedIn() {
    await this.page.waitForSelector(this.profileAvatar, { timeout: 15000 });
  }
}

module.exports = LoginPage;
