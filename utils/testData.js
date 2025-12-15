// utils/testData.js
require('dotenv').config();
module.exports = {
  ui: {
    username: process.env.UI_USERNAME || 'your-email@example.com',
    password: process.env.UI_PASSWORD || 'your-password'
  },
  messageBox: {
    botName: 'MyMessageBoxBot',
    title: 'Hello from Automation',
    message: 'This message was created by Playwright automation'
  },
  form: {
    formName: 'AutoFormUpload',
    textBoxLabel: 'Full Name',
    sampleText: 'Sainath Metre'
  },
  fixtures: {
    uploadFile: 'tests/fixtures/sample-upload.pdf'
  }
};
