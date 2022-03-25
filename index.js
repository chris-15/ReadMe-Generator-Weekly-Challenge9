// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs")


// function with an array of questions for user input using inquirer prompt
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is your github username? (Required)",
            validate: (githubInput) => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your github username!");
                    return false;
                }
            } 
        }, 
        {
            type: "input",
            name: "email",
            message: "What is your email address? (Required)",
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email address!")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? (Required)",
            validate: (titleInput) => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter your project title!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Provide a short description explaining the what, why, and how of your project. (Required)",
            validate: (descriptionInput) => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter a description of your project!");
                    return false
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? (Required)",
            validate: (installationInput) => {
                if (installationInput) {
                    return true;
                } else {
                    console.log("Please enter steps required to install project!")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Provide a description for what your project can be used for. (Required)",
            validate: (usageInput) => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Please enter a description for project usage!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contributing",
            message: "How can other developers contribute to your project? (Required)",
            validate: (contributingInput) => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log("Please enter a description on how others can contribute to your project!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "tests",
            message: "Provide instructions on how to conduct any tests implented on your project. (Required)",
            validate: (testsInput) => {
                if (testsInput) {
                    return true;
                } else {
                    console.log("Please enter instructions on how to conduct the tests!");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "Which license would you like to add to your project?",
            choices: [
                "GNU AGPLv3",
                "GNU GPLv3",
                "GNU LGPLv3",
                "Mozilla Public License 2.0",
                "Apache License 2.0",
                "MIT License",
                "Boost Software License 1.0",
                "The Unlicense",
                "None"
            ]
        }


    ])
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data)
}

// function to initialize app
function init() {
    questions()
    .then(data => {
        console.log(data);
        const readContent= generateMarkdown(data);
        writeToFile("./dist/README.md",readContent)
    })
}

// Function call to initialize app
init();
