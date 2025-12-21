Automation Anywhere – Playwright Automation Project
 Project Overview
This project demonstrates UI Automation and API Automation using the Playwright framework for Automation Anywhere Control Room.
The automation is implemented using the Page Object Model (POM) design pattern to ensure maintainability, reusability, and scalability.

 Use Cases Covered
 Use Case 1: Message Box Task (UI Automation)
Login to Automation Anywhere Control Room
Create a Task Bot
Add a Message Box action
Save the Task Bot

 Use Case 2: Form with File Upload (UI Automation)
Create a new Form
Add a Textbox field
Add a File Upload component
Upload a sample PDF file
Save the Form

 Use Case 3: Learning Instance (API Automation
Create a Learning Instance using REST APIs
Validate API response
Verify the Learning Instance in Control Room

 Framework and Tools Used
Automation Tool: Playwright
Playwright Version: 1.57.0
Programming Language: JavaScript
Design Pattern: Page Object Model (POM)
API Testing: Playwright APIRequestContext
Browser: Chromium
IDE: Visual Studio Code
Version Control: Git & GitHub
Platform: Windows

Project Structure

<img width="332" height="637" alt="Screenshot 2025-12-16 155842" src="https://github.com/user-attachments/assets/27d178ed-e161-49d0-aff6-9b3abe7ac359" />


Prerequisites
Node.js (v18 or higher)
npm
Automation Anywhere Community Edition account
Visual Studio Code

Setup Instructions
Step 1: Clone the Repository
git clone https://github.com/<your-username>/automation-playwright.git
cd automation-playwright

Step 2: Install Dependencies
npm install
npx playwright install

Step 3: Configure Environment Variables

Create a .env file in the project root:
UI_USERNAME=your-email@example.com
UI_PASSWORD=your-password
 .env file is ignored by Git for security reasons.

Step 4: (Windows Only) Allow npm Execution
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
This opens the Playwright HTML Test Report with detailed execution steps.


<img width="1919" height="1009" alt="image" src="https://github.com/user-attachments/assets/054469e2-dfa9-4bf4-bd02-f27cde383fa5" />
<img width="1919" height="978" alt="Screenshot 2025-12-15 100811" src="https://github.com/user-attachments/assets/3f8d5d65-1976-43b2-be60-727f7ccd5d6a" />
<img width="1919" height="1079" alt="Screenshot 2025-12-15 100743" src="https://github.com/user-attachments/assets/9919e969-b3a8-4f37-b929-325f25d48179" />
<img width="1919" height="978" alt="Screenshot 2025-12-15 100811" src="https://github.com/user-attachments/assets/d1f7be57-e3b2-4a8a-8446-a1d64cf2f136" />
<img width="1912" height="974" alt="Screenshot 2025-12-15 100750" src="https://github.com/user-attachments/assets/fcc855d6-11c2-4af5-8c6c-46eec0a8e4ef" />
<img width="1911" height="980" alt="image" src="https://github.com/user-attachments/assets/0dabb8f2-f6f3-4dbe-a2fb-5b53b580ffe7" />


