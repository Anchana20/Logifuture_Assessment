## Logifuture QA FE Code Challenge - Cypress Automation
This repository contains the Cypress automation framework for testing the login functionality of a fictional website. The framework is designed to support multiple environments, mobile and desktop testing, API validation, and CI/CD integration.

# Framework Overview
Framework: Mocha with Page Object Model (POM).

# Key Features:
* Dynamic multi-environment support (e.g., Production, UAT) with easy scalability
* Achieves mobile and desktop testing using Cypress viewport
* Validates API responses using demo APIs (e.g., reqres.in)
* Uses fixture files to avoid hardcoding test data (loginData.json)
* Includes CI/CD integration with GitHub Actions (cypresstest.yml)

# Prerequisites
Before running the tests, ensure you have the following installed:
* Node.js (v20.12.2)
* npm (v10.5.0)

# Setup and Installation
1. Clone the repository:
git clone https://github.com/Anchana20/Logifuture_QA_FE.git

2. Install dependencies:
npm init
npm install cypress --save-dev

3. Configure environments:
Update the Logifuture_QA_FE\cypress.config.js file with the required environment URLs.

# Running Tests in local
* Open Cypress Test Runner
    npx cypress open
* Run Cypress Tests in Different Environments & Viewports
    ENVIRONMENT - production, uat
    VIEWPORT - desktop, iphone_xr, android_pixel_6
 🔹 Run Tests in Headed Mode
    npx cypress run --env env=ENVIRONMENT,viewport=VIEWPORT --headed --reporter mochawesome
 🔹 Run Tests in Headless Mode
    npx cypress run --env env=ENVIRONMENT,viewport=VIEWPORT --reporter mochawesome

# Test Cases
The following test cases are implemented:
* Valid Login:
    Verify successful login with valid credentials.
* Invalid Login - Incorrect Email:
    Verify error message for incorrect email.
* Invalid Login - Incorrect Password:
    Verify error message for incorrect password.
* API Validation:
    Validate the login API request and response.

# CI/CD Integration(GitHub Actions)
The project includes a GitHub Actions workflow for Cypress Testing. The workflow is configured to run tests via manual trigger through the GitHub Actions UI, where you can input the variables such as environment (production/uat) and viewport (desktop/iphone_xr/android_pixel_6).

Workflow File: .github/workflows/cypresstest.yml

The workflow can be triggerred manually via GitHub Actions as environment variables need to be passed.

🔹 Steps to Trigger Tests in GitHub Actions
 1. Go to your GitHub repository
 2. Navigate to Actions
 3. Select the Cypress test execution workflow
 4. Click on Run workflow
 5. Enter the required inputs:
    env → production or uat
    viewport → desktop, iphone_xr, or android_pixel_6
 6. Click Run workflow to start the tests

------------------------------------------------------------------------------------------------------------------------------------------

# QUESTION - How would you have tackled this challenge if, instead of a website it would have asked you to test a native application?

ANSWER

* Mobile Native Applications: Since Cypress does not support native mobile app automation, I would use Appium, which is a widely used tool for mobile automation.
* Desktop Applications: For testing native desktop apps, I would leverage Appium with WinAppDriver for Windows applications and Mac2Driver for macOS applications.
* Hybrid Approach: If the application had both web and mobile versions like whatsapp, i'll redirect to the url and will perform the required functional/UI testing. 
* API Testing: If certain checks require validation from the backend, I would verify the API responses and perform necessary assertions to ensure data consistency.



