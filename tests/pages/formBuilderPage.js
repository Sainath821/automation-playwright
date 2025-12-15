// tests/pages/formBuilderPage.js
class FormBuilderPage {
  constructor(page) {
    this.page = page;
    this.formNameInput = 'input[placeholder="Enter name"], input[name="name"]';
    this.createBtn = 'button:has-text("Create")';
    this.toolboxTextbox = 'text=Textbox, .toolbox-item:has-text("Textbox")';
    this.toolboxFile = 'text=Select File, .toolbox-item:has-text("Select File"), text=File Upload';
    this.canvas = '.canvas, .form-canvas';
    this.rightPanel = '.right-panel, .properties-panel';
    this.inputLabel = `${this.rightPanel} input[placeholder*="Label"], ${this.rightPanel} input[name="label"]`;
    this.uploadInput = 'input[type="file"]';
    this.saveBtn = 'button:has-text("Save")';
    this.successToast = 'text=Saved, text=Uploaded';
  }

  async createForm(name) {
    await this.page.fill(this.formNameInput, name);
    await Promise.all([
      this.page.waitForSelector(this.toolboxTextbox, { timeout: 10000 }),
      this.page.click(this.createBtn)
    ]);
  }

  async addTextbox() {
    // click to add (drag-drop may be harder in tests)
    await this.page.click(this.toolboxTextbox);
    await this.page.waitForSelector(`${this.canvas} >> text=Textbox`, { timeout: 5000 }).catch(() => {});
  }

  async addFileControl() {
    await this.page.click(this.toolboxFile);
    await this.page.waitForSelector(`${this.canvas} >> text=Select File`, { timeout: 5000 }).catch(() => {});
  }

  async configureTextboxLabel(label) {
    await this.page.click(`${this.canvas} >> text=Textbox`);
    await this.page.waitForSelector(this.rightPanel, { timeout: 5000 });
    const labelCount = await this.page.locator(this.inputLabel).count();
    if (labelCount) {
      await this.page.fill(this.inputLabel, label);
    } else {
      // fallback: fill first input
      const inputs = this.page.locator(`${this.rightPanel} input`);
      if (await inputs.count()) await inputs.first().fill(label);
    }
  }

  async uploadFile(filePath) {
    // locate file input and set files
    const fileInput = await this.page.$(this.uploadInput);
    if (!fileInput) {
      throw new Error('File input not found in form builder — inspect and update selector');
    }
    await fileInput.setInputFiles(filePath);
    // wait a moment for upload
    await this.page.waitForTimeout(1000);
  }

  async saveForm() {
    await this.page.click(this.saveBtn);
    await this.page.locator(this.successToast).first().waitFor({ timeout: 10000 }).catch(() => {});
  }
}

module.exports = FormBuilderPage;
