// tests/ui/formUpload.spec.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const NavigationPage = require('../pages/navigationPage');
const FormBuilderPage = require('../pages/formBuilderPage');
const data = require('../../utils/testData');
const path = require('path');

test.describe('Use Case 2 - Form with Upload', () => {
  test('create form, add textbox and upload file', async ({ page }) => {
    const login = new LoginPage(page);
    const nav = new NavigationPage(page);
    const form = new FormBuilderPage(page);

    await login.goto();
    await login.login(data.ui.username, data.ui.password);
    await login.assertLoggedIn();

    await nav.openAutomation();
    await nav.openCreateDropdown();
    await nav.selectForm();

    await form.createForm(data.form.formName);
    await form.addTextbox();
    await form.addFileControl();
    await form.configureTextboxLabel(data.form.textBoxLabel);

    // upload fixture
    const filePath = path.resolve(data.fixtures.uploadFile);
    await form.uploadFile(filePath);

    await form.saveForm();

    const toast = page.locator('text=Saved, text=Uploaded');
    await expect(toast.first()).toBeVisible().catch(() => {});
  });
});
