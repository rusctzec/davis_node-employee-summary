const inquirer = require('inquirer');
const fs = require('fs');
const types = require('./employee-types');

let employees;
fs.readFile("employees.json", function(err, data) {
    // try to load existing employee data
    if (err) {
        console.log("Could not read employees.json. A new file will be created.")
        employees = [];
    } else {
        employees = JSON.parse(data)
    }
    // prompt for questions
    console.log("Add your employees:")
    newEmployeePrompts();
});

async function newEmployeePrompts() {
    let answers = await inquirer.prompt([
        {
            message:"What is this employee's role? Select one.",
            type: "list",
            choices: ["Employee", "Manager", "Engineer", "Intern"],
            name: "role"
        },
        {
            message: "What is this employee's name?",
            type: "input",
            name: "name"
        },
        {
            message: "What is this employee's email?",
            type: "input",
            name: "email"
        }
    ]);
    let newEmployee;
    console.log(answers);
    let ans2;
    switch (answers.role) {
        case "Manager":
            ans2 = await inquirer.prompt([
                {
                    message: "What is this employee's office number?",
                    type: "input",
                    name: "officeNumber"
                }
            ])
            newEmployee = new types.Manager(answers.name, answers.email, ans2.officeNumber);
            break;
        case "Engineer":
            ans2 = await inquirer.prompt([
                {
                    message: "What is this employee's GitHub username?",
                    type: "input",
                    name: "username"
                }
            ])
            newEmployee = new types.Engineer(answers.name, answers.email, ans2.username);
            break;
        case "Intern":
            ans2 = await inquirer.prompt([
                {
                    message: "What is this employee's school?",
                    type: "input",
                    name: "school"
                }
            ])
            newEmployee = new types.Intern(answers.name, answers.email, ans2.school);
            break;
        default:
            newEmployee = new types.Employee(answers.name, answers.email);
            break;
    }
    employees.push(newEmployee);
    console.log("Employee complete")
    fs.writeFile("employees.json", JSON.stringify(employees), err => {if (err) throw err});
    let additional = await inquirer.prompt([
        {
            message: "Add an additional employee?",
            type: "list",
            choices: ["Yes","No"],
            name: "confirmation"
        }
    ]);
    if (additional.confirmation == "Yes") {
        newEmployeePrompts();
    }
}
