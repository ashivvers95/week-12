const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes/index');
const inquirer = require('inquirer');
const dbMethods = require('./routes/apiRoutes/methods');
//const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

//middle ware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Use apiRoutes
app.use('/api', apiRoutes);

const promptUser = () => {
return inquirer.prompt([
    {
      type: 'list',
      name: 'task',
      message: 'What would you like to do?',
      choices: [
          'View all employees',
          'View all employees by department',
          'View all employees by manager',
          'Add employee',
          'Remove employee',
          'Update employee role',
          'Update employee manager',
          'View all roles',
          'Add role',
          'Remove role'
        ]
    }
  ])
};
promptUser()
.then(answers => { 
    switch(answers.task) {
    
    case "View all employees":
        dbMethods.viewAllEmployee();
    break;

    case "View all employees by department":
        viewAllEmployeeDepartment();
    break;

    case "View all employees by manager":
        viewAllEmployeeManager();
    break;

    case "Add employee":
        const add = function () {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'first_name',
          message: 'What is the employees first name?',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the employees last name?',
        }, 
        {
            type: 'input',
            name: 'role',
            message: 'What is the employees role?',
        },
        {
            type: 'input',
            name: 'manager',
            message: 'Who is the employees manager?',
        }
      ])
      .then(answers => {
        addEmployee(answers)
      });
    };
    add();
    break;

    case "Remove employee":
        var remove = function () {
        return inquirer.prompt([
            {
              type: 'input',
              name: 'first_name',
              message: 'What is the employees first name?',
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the employees last name?',
            }, 
          ])
          .then(answers => {
            removeEmployee(answers)
          });
        };
        remove();
    break;

    case "Update employee role":
        var updateRole = function () {
        return inquirer.prompt([
            {
              type: 'input',
              name: 'first_name',
              message: 'What is the employees first name?',
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the employees last name?',
            }, 
            {
                type: 'input',
                name: 'role',
                message: 'What is the employees new role?'
            }
          ])
          .then(answers => {
            updateEmployeeRole(answers)
          });
        };
        updateRole();
    break;

    case "Update employee manager":
        var updateManager = function () {
        return inquirer.prompt([
            {
              type: 'input',
              name: 'first_name',
              message: 'What is the employees first name?',
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the employees last name?',
            }, 
            {
                type: 'input',
                name: 'manager',
                message: 'Who is the employees new manager?'
            }
          ])
          .then(answers => {
            updateEmployeeManager(answers)
          });
        };
        updateManager();
    break;

    case "View all roles":
        viewAllRoles();
        
    break;

    case "Add role":
        var addRoles = function () {
        return inquirer.prompt([
            {
              type: 'input',
              name: 'update_role',
              message: 'What is the new role?',
            },
          ])
          .then(answers => {
            addRole(answers)
          });
        }
        addRoles();
    break;

    case "Remove role":
        var removeRoles = function () {
        return inquirer.prompt([
            {
              type: 'input',
              name: 'update_role',
              message: 'What role did you want to remove?',
            },
          ])
          .then(answers => {
            removeRole(answers)
          });
        };
        removeRoles();
    break;
}
});

db.connect(err => {
    if(err)throw err;
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
});
});

//default response for any other request (not found)
app.use((req, res)=> {
    res.status(404).end();
});

