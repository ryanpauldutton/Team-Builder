const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
// const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

//HELP USE FOR INQUIRER (https://www.educative.io/answers/how-to-use-the-inquirer-node-package) 

const employeeArr = [];

inquirer.prompt([{
        type: "input",
        name: "name",
        message: 'What is the managers name?',
      },
      {
        type: "number",
        name: 'id',
        message: 'What is the managers id?',
      },
      {
        type: "input",
        name: 'email',
        message: 'What is the managers email?',
      },
      {
        type: "input",
        name: 'officeNumber',
        message: 'What is the managers office number?'
}]).then(response => {
// HELP FROM (https://stackoverflow.com/questions/67343494/how-to-initialise-class-properties-using-inquirer-js)
const ManagerOne = new Manager(response.name, response.id, response.email, response.officeNumber);
employeeArr.push(ManagerOne);
    // populate manager info
    promptForNextEmployee();
})

const promptForNextEmployee = () => {
    inquirer.prompt([{
        name: "nextEmployee",
        message: "next employee?",
        type: "list",
        choices: ['intern', 'engineer', 'manager', 'finish']
        // choice of 3
    }]).then(response => {
        if (response.nextEmployee === 'intern'){
            promptForIntern();
        }
        else if (response.nextEmployee === 'engineer'){
            promptForEngineer();
        }
        else if (response.nextEmployee === 'manager'){
            promptForManager();
        }
        // if engineer
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
    })
}

const promptForEngineer = () => {
    inquirer.prompt([{
     type: "input",
            name: "name",
            message: 'What is the Engineers name?'
          },
          {
            type: "number",
            name: 'id',
            message: 'What is the Engineer id?',
          },
          {
            type: "input",
            name: 'email',
            message: 'What is the Engineer email?',
          },
          {
            type: "input",
            name: 'github',
            message: 'What is the Engineers github?',
          }
    ]).then(response => {
        const EngineerOne = new Engineer(response.name, response.id, response.email, response.github) 
        employeeArr.push(EngineerOne)
   promptForNextEmployee();
        // add new engineer to employees array
        // promptForNextEmployee
})
}

const promptForIntern = () => {
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: 'What is the Interns name?',
          },
          {
            type: "number",
            name: 'id',
            message: 'What is the Interns id?',
          },
          {
            type: "input",
            name: 'email',
            message: 'What is the Interns email?',
          },
          {
            type: "input",
            name: 'github',
            message: 'What is the Interns github?',
          
        //intern questions
    }]).then(response => {
        const InternOne = new Intern(response.name, response.id, response.email, response.officeNumber)
        employeeArr.push(InternOne)

        // add new intern to employees array
        // promptForNextEmployee
    })
}

const buildPage = () => {
    render(employeeArr)
}
// TODO: Write Code to gather information about the development team members, and render the HTML file.
buildPage();

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// FROM DAN 

const buildPage = () => {
    const testArray = []
    testArray.push(new  Manager("Dan"...))
    testArray.push(new Employee("Daniel"...))
    testArray.push(new Intern("Danny".....))
 console.log(render(testArray))
}
buildPage();