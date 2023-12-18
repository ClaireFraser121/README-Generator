// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Description
  ${data.projectDescription}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Video Demo](#video-demo)
  - [Screenshots](#screenshots)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license} License.

  
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE.md](LICENSE.md) file for details.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, feel free to reach out to me on GitHub:
  [${data.username}](https://github.com/${data.username})
  
  You can also contact me via email: ${data.email}
  
  ## Video Demo
  [Link to Video Demo](${data.videoLink})

  ## Screenshots
  ![Screenshot 1](${data.screenshot1})
  ![Screenshot 2](${data.screenshot2})
`;
}

module.exports = generateMarkdown;
