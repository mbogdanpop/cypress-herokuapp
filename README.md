# Cypress Automation with TypeScript

This project automates tests for specific components of the website the-internet.herokuapp.com using Cypress with TypeScript. The project follows a Page Object Model (POM) pattern to separate the selectors from the test logic for better maintainability and scalability.

# Project Structure

/cypress
  /downloads          # Cypress download folder
  /fixtures           # Test data for Cypress tests
  /integration
    /tests            # Organized tests for different features
      brokenImagesTest.spec.ts
      dropdownTest.spec.ts
      dynamicLoadingTest.spec.ts
      redirectLinkTest.spec.ts
  /pages              # Page objects for encapsulating selectors and actions
    # Files such as:
      dropdownPage.ts
      brokenImagesPage.ts
      dynamicLoadingPage.ts
      redirectLinkPage.ts
  /support            # Cypress support files (commands, e2e, etc.)
/cypress.config.js    # Cypress configuration file
/tsconfig.json        # TypeScript configuration file
/package.json         # Node package file with project dependencies
/README.md            # Project documentation

# Key Components:

    •	Page Objects: Defined in /pages/ to abstract locators and page interactions.
    •	Tests: Located in /integration/tests/, each test corresponds to a different feature on the website.
    •	Base URL: Configured in cypress.json to simplify navigation.

# Prerequisites

    •	Node.js (v14 or higher)
    •	npm (v6 or higher)

# Ensure you have Node.js and npm installed on your system. You can check the versions using:

`node -v`
`npm -v`

# Note: Installing Node.js

If you do not have Node.js installed, you can download and install it from the official Node.js website. This will also install npm (Node Package Manager) automatically.

# Installation

1. Clone the repository:

`git clone <repository-url>`
`cd cypress`

2. Install the project dependencies:

`npm install`

# Configuration

The base URL for the tests is already defined in cypress.json

If you need to change the base URL for testing a different environment, you can modify this file.

# Running the Tests

You can run Cypress in two modes:

1. Cypress GUI Mode: Opens an interactive window where you can see the tests running in real time.

`npx cypress open`

Once the Cypress window opens, you can select a test to run.

2. Cypress Headless Mode: Runs all the tests in headless mode (in the terminal).

`npx cypress run`

# Tests Included
• Dropdown Test: Verifies the functionality of the dropdown menu.
• Broken Images Test: Checks for any broken images on the page.
    • Note: This test is designed to fail if broken images are found on the page. Cypress will identify non-200 responses for image requests and flag them as broken. The test logs the broken images and asserts their status.
• Dynamic Loading Test: Verifies the dynamic loading of content on the page.
• Redirect Link Test: Validates HTTP redirection and checks the HTTP Status Codes registry page.


# Page Object Model (POM)

This project uses a Page Object Model (POM) structure to separate the page elements from the test logic. Each feature (dropdown, broken images, etc.) has a corresponding file in the /pages/ directory that contains selectors and page-specific methods. This promotes reusability and maintainability.

# Example (Dropdown Page Object):

export class DropdownPage {
  dropdownSelector = '#dropdown'; // Selector for the dropdown element

  selectOption(value: string) {
    cy.get(this.dropdownSelector).select(value); // Method to select a dropdown option
  }
}
# TypeScript Setup

The project is configured to use TypeScript with Cypress. The TypeScript configuration is stored in tsconfig.json:

{
  "compilerOptions": {
    "target": "es6",
    "lib": ["es6", "dom"],
    "types": ["cypress", "node"],
    "esModuleInterop": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "noEmit": true
  },
  "include": ["**/*.ts"]
}


# Adding New Tests

To add new tests, follow these steps:

1. Create a new page object in /pages/ for the new feature.
2. Write a new test file in /integration/tests/ that uses the page object.

# Troubleshooting

1.	Cypress Not Found:
	Ensure Cypress is installed by running: npm install cypress --save-dev.
2.	TypeScript Errors:
	Ensure TypeScript is installed: npm install typescript --save-dev.
	Verify tsconfig.json is correctly configured.

# License

This project is licensed under the MIT License.

Feel free to modify the README according to your project needs. Let me know if you need any additional sections!
