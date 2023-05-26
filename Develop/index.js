// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name:'title',
        message:'What is the title of your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What would you like your description to be?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are your apps installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your app?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are your apps contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are some instructions to test your application with?',
    },
    {
        type: 'input',
        name: 'cedits',
        message: 'Who helped you with this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you be using?',
        choices: ['nothing','Unlicensed','GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName) {
    fs.writeFile('./Generated-README/README.md', fileName, (err) =>
    err ? console.log(err) : console.log('Successfully generated README.md!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((data) => {
            const readmePageContent = generateMarkdown(data);
            writeToFile(readmePageContent);
        })
}

// Function call to initialize app
init();
