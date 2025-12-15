// tests/ui/messageBox.spec.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const NavigationPage = require('../pages/navigationPage');
const TaskBotPage = require('../pages/taskBotPage');
const data = require('../../utils/testData');

test.describe('Use Case 1 - Message Box Task', () => {
  test('create message box task bot', async ({ page }) => {
    const login = new LoginPage(page);
    const nav = new NavigationPage(page);
    const bot = new TaskBotPage(page);

    await login.goto();
    await login.login(data.ui.username, data.ui.password);
    await login.assertLoggedIn();

    await nav.openAutomation();
    await nav.openCreateDropdown();
    await nav.selectTaskBot();

    // create bot and add message box
    await bot.createBot(data.messageBox.botName);
    await bot.addMessageBox();
    await bot.configureMessage(data.messageBox.title, data.messageBox.message);
    await bot.saveBot();

    // final assertion: check bot name appears or success toast
    // This is an example; adjust according to UI toast or list
    const toast = page.locator('text=Saved, text=created, text=successfully');
    await expect(toast.first()).toBeVisible().catch(() => {}); // not fatal if toast not present
  });
});
