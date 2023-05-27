// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string 

function renderLicenseBadge(license) {
  let badgers = '';

  switch (license) {
    case 'nothing':
      return badgers;

    case 'Unlicensed':
      return badgers += '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';

    case 'GNU AGPLv3':
      return badgers += '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';

    case 'GNU GPLv3':
      return badgers += '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    case 'GNU LGPLv3':
      return badgers += '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';

    case 'Mozilla Public License 2.0':
      return badgers += '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';

    case 'Apache License 2.0':
      return badgers += '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    case 'MIT License':
      return badgers += '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    case 'Boost Software License 1.0':
      return badgers += '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';

    default:
      throw new Error('license input error')
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let lyesenseLink = '';

  switch (license) {
    case 'nothing':
      return lyesenseLink;

    case 'Unlicensed':
      return lyesenseLink += '[License: Unlicense](https://choosealicense.com/licenses/unlicense/)';

    case 'GNU AGPLv3':
      return lyesenseLink += '[License: AGPL v3](https://choosealicense.com/licenses/agpl-3.0/)';

    case 'GNU GPLv3':
      return lyesenseLink += '[License: GPL v3](https://choosealicense.com/licenses/gpl-3.0/)';

    case 'GNU LGPLv3':
      return lyesenseLink += '[License: LGPL v3](https://choosealicense.com/licenses/lgpl-3.0/)';

    case 'Mozilla Public License 2.0':
      return lyesenseLink += '[License: MPL 2.0](https://choosealicense.com/licenses/mpl-2.0/)';

    case 'Apache License 2.0':
      return lyesenseLink += '[License: Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)';

    case 'MIT License':
      return lyesenseLink += '[License: MIT](https://choosealicense.com/licenses/mit/)';

    case 'Boost Software License 1.0':
      return lyesenseLink += '[License: Boost Software 1.0](https://choosealicense.com/licenses/bsl-1.0/)';

    default:
      throw new Error('license input error')
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license = '') {
  if (license === 'nothing') {
    return '';
  } else {
    return `## License             \n
    ${renderLicenseLink(license)}  \n
    ${renderLicenseBadge(license)} \n
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data = {}) {
  return `
# ${data.title} \n

${renderLicenseBadge(data.license)} \n

## Description \n

${data.description} \n

## Table of Contents \n

- [Installation](#installation) \n
- [Usage](#usage) \n
- [Credits](#credits) \n
- [Contributing](#contributing) \n
- [Tests](#tests) \n
- [Questions](#questions) \n
${data.license === 'nothing' ? '' : '- [License](#license)'} \n


## Installation \n

${data.installation} \n

## Usage \n

${data.usage} \n
    
![alt text](insert file path here) \n

## Credits \n

${data.credits} \n

${renderLicenseSection(data.license)} \n

${data.license} \n

## Contributing \n

${data.contributing} \n

## Tests \n

${data.tests} \n

## Questions \n

To contact me for any questions you may have please email me at ${data.email} \n

My GitHub: ${data.github} \n

`;
}

module.exports = generateMarkdown;
