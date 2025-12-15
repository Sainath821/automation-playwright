Project Overview
This project demonstrates UI Automation and API Automation using the Playwright framework for Automation Anywhere Control Room.

The automation covers:

Use Case 1: Create a Task Bot with Message Box (UI Automation)

Use Case 2: Create a Form with Textbox and File Upload (UI Automation)

Use Case 3: Create Learning Instance using REST APIs (API Automation)

Framework and Tools Used
Automation Tool: Playwright

Playwright Version: 1.57.0

Programming Language: JavaScript

Automation Design Pattern: Page Object Model (POM)

Test Runner: Playwright Test Runner

Browser: Chromium

API Testing: Playwright APIRequestContext

IDE: Visual Studio Code

Version Control: Git & GitHub

Platform: Windows

automation-playwright/
│
├── tests/
│   ├── ui/
│   │   ├── messageBox.spec.js
│   │   └── formUpload.spec.js
│   ├── api/
│   │   └── learningInstance.spec.js
│
├── pages/
│   ├── loginPage.js
│   ├── navigationPage.js
│   ├── taskBotPage.js
│   └── formPage.js
│
├── utils/
│   └── testData.js
│
├── playwright.config.js
├── package.json
├── .env
└── README.md

Prerequisites
Node.js (v18 or above recommended)

npm

Visual Studio Code

Automation Anywhere Community Edition account

Setup Instructions
Step 1: Clone Repository / Extract ZIP
git clone <your-github-repo-url>
cd automation-playwright

Step 2: Install Dependencies
npm install
npx playwright install

Step 3: Configure Environment Variables
Create a .env file in the project root:
UI_USERNAME=your-email@example.com
UI_PASSWORD=your-password

Step 4: (Windows Only) Allow npm execution
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force



Execution Instructions
Run All Tests
npm test

Run UI Tests Only
npx playwright test tests/ui

Run API Tests Only
npx playwright test tests/api

Run Tests in Headed Mode (Visible Browser)
npx playwright test --headed

View Test Report
npx playwright show-report
This opens the Playwright HTML Test Report in the browser.