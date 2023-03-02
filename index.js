// npms
const iq = require('inquirer');
const fs = require("fs");
const employee = require("./src/html");

// require library
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Array to store a new team members
const teamMembers = [];

// async function for the command line input 
const question = async () => {
    const answers = await
    iq.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please input the name of the employee.',
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Provide your employee ID.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email.'
        },
        {
            type: 'list',
            choices: ['Manager', 'Engineer','Intern'],
            name: 'role',
            message: 'What is your role?'
        }
    ])

    // create manager profile
    if(answers.role === "Manager"){
        const mInput = await
        iq.prompt([
            {
                type: 'input',
                message: 'Enter the office number',
                name: 'office'
            }
        ]) 
        const newManager = new Manager(
            answers.name,
            answers.ID,
            answers.email,
            mInput.office
        )
        teamMembers.push(newManager);
    }
    // create engineer profile
    else if(answers.role === "Engineer"){
        const eInput = await
        iq.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is your github username?'
            }
        ])
        const newEngineer = new Engineer(
            answers.name,
            answers.ID,
            answers.email,
            eInput.github
        )
        teamMembers.push(newEngineer);
    }
    // create intern pforile
    else if(answers.role === "Intern"){
        const iInput = await
        iq.prompt([
            {
                type: 'input',
                name: 'university',
                message: 'Name of your University'
            }
        ])
        const newIntern = new Intern(
            answers.name,
            answers.ID,
            answers.email,
            iInput.university
        )
        teamMembers.push(newIntern);
    }   
    console.log(teamMembers)
}

// async function to create another team member or to create team.
async function teamDone(){
    await question();
   
    const moreTeam = await
    iq.prompt([
        {
            type: 'list',
            name: 'more',
            choices: ['Yes', 'No'],
            message: 'Would you like to add more team members?'
        }
    ])  

    if(moreTeam.more === 'Yes'){
        console.log('Returning to main Menu');
        return teamDone();
    }
    else{
        return generateTeam();
    }
}

teamDone();

// generate html from the src.
function  generateTeam() {
    fs.writeFileSync("./dist/index.html",employee(teamMembers), "UTF-8"
    );
  }