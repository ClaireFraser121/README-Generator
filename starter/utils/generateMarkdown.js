// function to generate markdown for README
function generateMarkdown(data) {
  // Map user-friendly license names to corresponding badge URLs
  const licenseBadges = {
      'MIT': 'https://img.shields.io/badge/License-MIT-blue.svg',
      'GNU GPLv3': 'https://img.shields.io/badge/License-GNU%20GPLv3-blue.svg',
      'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      'ISC': 'https://img.shields.io/badge/License-ISC-blue.svg',
      'None': 'https://img.shields.io/badge/License-None-blue.svg',
  };

  // Get the badge URL based on the selected license
  const badgeURL = licenseBadges[data.license];

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
  
  [![License](${badgeURL})](https://opensource.org/licenses/${encodeURIComponent(data.license)})
  
  For more details, please see the [LICENSE.md](LICENSE.md) file.
  
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
