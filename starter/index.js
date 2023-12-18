const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = 'README.md';

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide information on how to use your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide information on how to run tests (if applicable):'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'videoLink',
        message: 'Enter the link to your video demo:',
    },
    {
        type: 'input',
        name: 'screenshot1',
        message: 'Enter the URL of your first screenshot:',
    },
    {
        type: 'input',
        name: 'screenshot2',
        message: 'Enter the URL of your second screenshot (optional):',
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, 'utf8');  // Added 'utf8' encoding
    console.log(`File "${fileName}" written successfully!`);
}


// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile(fileName, markdownContent);  // Use the fileName variable
    });
}

// function call to initialize program
init();
