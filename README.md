[![Playwright Tests](https://github.com/AliAhmad05/e2eDemoQA/actions/workflows/ci.yml/badge.svg)](https://github.com/AliAhmad05/e2eDemoQA/actions/workflows/ci.yml)


## Owner

The code in the repo is written by https://github.com/AliAhmad05

## File Structure

```
└── 📁 e2eDemoQA
    └── 📁.github
        └── 📁workflows
            └── ci.yml
    └── .gitignore
    └── README.md
    └── 📁e2e
        └── 📁Fixtures
            └── apiUserData.js
            └── panda.PNG
            └── userData.js
            └── userData2.js
        └── 📁POM
            └── brokenImage.js
            └── commands.js
            └── dragNDrop.js
            └── elements.js
            └── 📁locators
                └── locator.js
            └── practiceForm.js
            └── progressBar.js
            └── toolTip.js
        └── 📁api
            └── API.spec.js
        └── 📁ui
            └── TC01.spec.js
            └── TC02.spec.js
            └── TC03.spec.js
            └── TC04.spec.js
            └── TC05.spec.js
            └── TC06.spec.js
    └── package.json
    └── playwright.config.js
```

## Getting Started

Follow the steps below to get the project set up on your local machine.

### Prerequisites

Ensure you have Node.js installed. If not, download and install it from [Node.js official website](https://nodejs.org/).

### Installation

1. Navigate to the project directory.
2. Install the required dependencies:

`npm install`

## Running Tests

### UI Mode

To run the tests in UI mode:

`npx playwright test --ui`

### Headless Mode

To run the tests in headless mode:

`npx playwright test`