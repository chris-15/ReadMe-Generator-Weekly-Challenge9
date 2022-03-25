// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  return license === "GNU AGPLv3"? `![badge](https://img.shields.io/badge/license-GNU%20AGPLv3-blue)`
  :license === "GNU GPLv3"? `![badge](https://img.shields.io/badge/license-GNU%20GPLv3-blue)`
  :license === "GNU LGPLv3"? `![badge](https://img.shields.io/badge/license-GNU%20LGPLv3-blue)`
  :license === "Mozilla Public License 2.0"? `![badge](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-blue)`
  :license === "Apache License 2.0"? `![badge](https://img.shields.io/badge/license-Apache%20License%202.0-blue)`
  :license === "MIT License"? `![badge](https://img.shields.io/badge/license-MIT%20License-blue)`
  :license === "Boost Software License 1.0" ? `![badge](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-blue)`
  :license === "The Unlicense" ? `![badge](https://img.shields.io/badge/license-The%20Unlicense-blue)`
  : "";
  
  
}


// function to populate License content
function renderLicenseLink(license) {
  return license === "None" ? `This project is covered under no license` : `This project is covered under ${data.license}. For more information about licenses, please visit [https://choosealicense.com/licenses/](https://choosealicense.com/licenses/).`
  
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}


  ## Description
  ${data.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any further question please visit my github profile [here](https://github.com/${data.github}) or email me at ${data.email}.


`;
}

module.exports = generateMarkdown;
