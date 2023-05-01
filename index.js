// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const markdownTemplate = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, markdownTemplate(data)) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {  
                type: 'input',
                message: "What is your project title?",
                name: 'title',
            },
            {
                type: 'input',
                message: 'Provide a description of your project explaining the what, why, and how of your project.',
                name: 'description',
            },
            {
                type: 'checkbox',
                message: 'Select the items to be included in your table of contents.',
                choices: ['Installation', 'Usage', 'Contributing', 'License', 'Tests', 'Questions'],
                name: 'table_contents',
            },
            {
                type: 'input',
                message: "What are the steps required to install your project?",
                name: 'installation',
            },
            {
                type: 'input',
                message: 'What are the instructions for use?',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'How can developers contribute to this project?',
                name: 'contributing',
            },
            {
                type: 'list',
                message: 'Which license would you like to include?',
                choices: ['None', 'Academic Free', 'Apache 2.0', 'Artistic', 'BSD', 'Creative Commons', 'Educational Community', 'Eclipse', 'GNU', 'ISC', 'MIT', 'Mozilla', 'SIL', 'zLib'],
                name: 'license',
            },
            {
                type: 'input',
                message: 'What tests have been crated for your application?',
                name: 'tests',
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'username',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
        ])
        .then(data => {
            const path = "./output/"
            let fileName = `${data.title.split('').join('')}.md`
            return writeFile(path+fileName, markdownTemplate(data))
        }).then(data => {
            console.log('File written successfully');
        }).catch(err => {
            console.error(err);
        })
}

// Function call to initialize app
init();
