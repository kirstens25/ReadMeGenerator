const inquirer = require('inquirer');
const readme = require('./readme');
const fs = require('fs');

// ask user questions to generate read me

inquirer.prompt([
    // title
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projecttitle',
    },
    // description
    {
        type: 'input',
        message: 'What is the description of your project? You can use these questions to guide you: What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
        name: 'projectdescription',
    },
    {
        type: 'list',
        message: 'Which license would you like your project to have?',
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'MIT',
            'The Unlicense',
        ],
        name: 'license',
    },

    // installation instructions
    {
        type: 'input',
        message: 'What steps are required to install your project?',
        name: 'installation',
    },

    // usage information COME BACK TO DO IMAGE
    {
        type: 'input',
        message: 'What steps are required to use your project?',
        name: 'usage',
    },

    // contribution guidelines - request git hub username
    {
        type: 'input',
        message: 'What is your GitHub username? Please do NOT include the @ symbol.',
        name: 'contribute',
    },

    // questions - request email
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    // test instructions
    {
        type: 'input',
        message: 'Enter test examples here',
        name: 'test',
    },
])
    .then(function (answers) {
        console.log(answers);
        const readmeData = readme.generateReadme(answers);

        // save readme data in readme.md file
        fs.writeFileSync(__dirname + '/readme.md', readmeData, 'utf-8');
    });




// section added to license section that explains chosen license
