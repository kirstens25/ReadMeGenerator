function generateBadgeUrl(license){
   return `https://img.shields.io/badge/License-${encodeURIComponent(license)}-blueviolet`;
};

function generateReadme(answers) {
    return `# ${answers.projecttitle}

## Project Description
    ${answers.projectdescription}
    
## License
    ![This project is licensed under](${generateBadgeUrl(answers.license)}).

## Table of Contents
    
   - [Installation Instructions](#installation-instructions) 
   - [Usage Information](#usage-information) 
   - [Contribution Guidelines](#contribution-guidelines) 
   - [Questions](#questions) 
   - [Test Instructions](#test-instructions) 


## Installation Instructions
    ${answers.installation}    
   
## Usage Information
    ${answers.usage}    

## Contribution Information
    Contributors on this project are:
    ${answers.contribute} - www.github.com/${answers.contribute}

## Questions
    If you have any questions about this project, please contact the project creator: ${answers.contribute} via email at ${answers.email}.

## Test Instructions
    ${answers.test}`   
    
    }

    module.exports = {
        generateReadme
    
}

// ## Badges
    
//     ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
//     Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
