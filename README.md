# IPL Social

**Last Name**: Abakar
**First Name**: Hadjé
**Email**: hadje.abakar@student.vinci.be

**GitHub Project URL**: https://github.com/hadje-abakar-vinci/IPL-social.git

## Description
This project uses GitHub Actions to automate Continuous Integration (CI). The pipeline runs on every Pull Request (PR) to the main branch. It includes steps to install dependencies and run unit tests.

## Prerequisites
Before starting, ensure you have the following installed on your computer:

- Node.js: A JavaScript runtime environment. You can download and install it from nodejs.org.
- npm (Node Package Manager): Included with Node.js, it manages the project's dependencies.
- Git: A version control system needed to clone the repository. Download it from git-scm.com.

## Installation
Once the prerequisites are installed, follow these steps to set up the project:

- Clone the repository from GitHub: git clone https://github.com/hadje-abakar-vinci/IPL-social.git
- Navigate to the project directory: cd IPL-social
- Install the project dependencies using npm: npm install
- To run the tests and validate the password checker function, use the following command: npm test

## Code Explanation
In the "IPL Social" project, we created a password validation function in a file named passwordChecker.js. This function ensures that a given string ais a valid password by following these criteria:

* The password must contain at least 8 characters.
* It must include at least one special character (e.g., @, #, !, etc.).
* It must contain at least one digit.
* It must not contain the string "IPL", regardless of case (e.g., "IPL", "ipl", "IpL").
To ensure the quality and reliability of this function, we used Test Driven Development (TDD). The associated tests are written in a separate file named passwordChecker.test.js, and they are automatically executed via a CI pipeline configured with GitHub Actions. This pipeline triggers on every Pull Request (PR) to the main branch.

