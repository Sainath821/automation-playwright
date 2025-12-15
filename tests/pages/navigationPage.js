// tests/pages/navigationPage.js
class NavigationPage {
  constructor(page) {
    this.page = page;
    this.automationMenu = 'nav >> text=Automation, text=Automation';
    this.createButton = 'button:has-text("Create"), text=Create';
    this.taskBotOption = 'text=Task Bot';
    this.formOption = 'text=Form';
  }

  async openAutomation() {
    await this.page.click(this.automationMenu);
    await this.page.waitForTimeout(500); // give UI a moment
  }

  async openCreateDropdown() {
    await this.page.click(this.createButton);
  }

  async selectTaskBot() {
    await this.page.click(this.taskBotOption);
  }

  async selectForm() {
    await this.page.click(this.formOption);
  }
}

module.exports = NavigationPage;
