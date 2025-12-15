// tests/pages/taskBotPage.js
class TaskBotPage {
  constructor(page) {
    this.page = page;
    this.botNameInput = 'input[placeholder="Enter name"], input[name="name"], input[aria-label="Name"]';
    this.createBtn = 'button:has-text("Create")';
    this.actionsSearch = 'input[placeholder*="Search"], input[placeholder*="Search actions"]';
    this.messageBoxItem = 'text=Message Box';
    this.rightPanel = '.right-panel, .properties-panel';
    this.titleInput = `${this.rightPanel} input[placeholder*="Title"], ${this.rightPanel} input[name="title"]`;
    this.messageTextarea = `${this.rightPanel} textarea, ${this.rightPanel} input[name="message"]`;
    this.saveBtn = 'button:has-text("Save")';
    this.successToast = 'text=successfully, text=Saved';
  }

  async createBot(name) {
    await this.page.fill(this.botNameInput, name);
    await Promise.all([
      this.page.waitForSelector(this.actionsSearch, { timeout: 10000 }),
      this.page.click(this.createBtn)
    ]);
  }

  async addMessageBox() {
    await this.page.fill(this.actionsSearch, 'Message Box');
    // Small wait for search results
    await this.page.waitForTimeout(500);
    await this.page.click(this.messageBoxItem);
    // ensure properties panel is visible
    await this.page.waitForSelector(this.rightPanel, { timeout: 10000 });
  }

  async configureMessage(title, message) {
    // Fill title and message in right panel - selectors might differ; use generic text fills
    // If inputs are not found, fill textarea and input by index
    const titleCount = await this.page.locator(this.titleInput).count();
    if (titleCount) {
      await this.page.fill(this.titleInput, title);
    } else {
      // try first input in rightPanel
      const inputs = this.page.locator(`${this.rightPanel} input`);
      if (await inputs.count()) await inputs.first().fill(title);
    }

    const msgCount = await this.page.locator(this.messageTextarea).count();
    if (msgCount) {
      await this.page.fill(this.messageTextarea, message);
    } else {
      const textareas = this.page.locator(`${this.rightPanel} textarea`);
      if (await textareas.count()) await textareas.first().fill(message);
    }
  }

  async saveBot() {
    await this.page.click(this.saveBtn);
    await this.page.waitForTimeout(1000);
    // Optional: wait for toast
    await this.page.locator(this.successToast).first().waitFor({ timeout: 10000 }).catch(() => {});
  }
}

module.exports = TaskBotPage;
