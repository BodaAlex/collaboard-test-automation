# Collaboard Test Automation

## Overview
**Collaboard Test Automation** is a personal repository for automating tests of the Collaboard application using Playwright. This project aims to streamline the testing process, ensuring that the application functions as expected across different scenarios.

## Prerequisites
Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 24.6 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

## Getting Started

### Clone the Repository
To get a local copy of the project, clone the repository using the following command:

```bash
git clone https://github.com/yourusername/collaboard-test-automation.git
```

## Install dependencies
Navigate to the project directory and install the required dependencies:

```
cd collaboard-test-automation
npm install
```

## Environment Variables

To run the tests, you need to create a `.env` file in the project root directory. This file will store your environment variables securely.

### Creating the .env File

1. In the root of your project, create a file named `.env`.
2. Add the following variables to the `.env` file:

```plaintext
MY_USERNAME=yourcollaboard@account.example
MY_PASSWORD=yourcollaboardpassword
```


## Run Tests
To execute the tests, use the following command:

```
npx playwright test
```

