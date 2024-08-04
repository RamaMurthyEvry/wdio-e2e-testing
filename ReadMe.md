# WebdriverIO TypeScript Cucumber Project
This project is an **WDIO-E2ETesting** Porject setup for testing a web application using WebdriverIO with TypeScript and Cucumber.

## Prerequisites
Before you begin, ensure you have met the following requirements:

Install dependencies: 
- Node.js (v14 or later)
- npm 
- Git (optional, for version control)
-java jdk latest version

# Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-https://github.com/RamaMurthyEvry/wdio-e2e-testing/>
   cd <repository-WDIO-E2ETesting >

# Project Structure
.
├── src
│   ├── features
│   │   ├── *.feature
│   ├── step-definitions
│   │   ├── *.steps.ts
│   ├── support
│   │   ├── hooks.ts
│   │   ├── world.ts
├── wdio.conf.ts
├── tsconfig.json
└── package.json

src/features: Contains the Cucumber feature files.
src/step-definitions: Contains the step definition files.
src/support: Contains hooks and custom world definitions.
wdio.conf.ts: WebdriverIO configuration file.
tsconfig.json: TypeScript configuration file.
package.json: Contains project dependencies and scripts.


# Configuration
WebdriverIO Configuration
The wdio.conf.ts file contains the configuration for WebdriverIO. Key settings include:

specs: Path to feature files.
capabilities: Browser capabilities.
services: WebdriverIO services like Selenium Standalone, Appium, etc.
reporters: Reporters for test results.

TypeScript Configuration
The tsconfig.json file contains the TypeScript configuration. Key settings include:

compilerOptions: TypeScript compiler options, such as target version, module type, etc.
include: Files to be included in the compilation.

# Running Tests

To run the tests, use the following command:

Using npm:  wdio run ./wdio.conf.ts 
