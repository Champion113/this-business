const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
// const DB = require("./db/db");
// const connection = require('mysql2/typings/mysql/lib/Connection');
const connection = require('./db/connection');
const DB = require("./db/db");
// const inquirer = require("inquirer");
// const cTable = require('console.table');


function startApp() {
  inquirer.prompt(
    {
      type: 'list',
      name: 'begin',
      message: 'Welcome! What would you like to do?',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', new inquirer.Separator(), 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role']
    }
  )
    .then(res => {
      console.log(res)
      switch (res.begin) {
        case "View All Departments":
          readDepartments()
          break;
        case "View All Roles":
          readRoles()
          break;
        case "View All Employees":
          readEmployees()
          break;
        case "Add Departments":
          addDepartments()
          break;
        case "Add roles":
          addRoles()
          break;
        case "Add Employees":
          addEmployees()
          break;
        case "Update Employees":
          updateEmployees()
          break;
        default:
          console.log("goodbye")
      }
    })
  // startApp();
  //VIEW ALL DEPARTMENTS
  const readDepartments = () => {
    console.log('Selecting all departments...\n');
    connection.query('SELECT * FROM departments;', function (err, res) {
      if (err) throw err;
      cTable(res);
    })
    startApp();
  };


  startApp()
  //VIEW ALL ROLES
  const readRoles = () => {
    console.log('Selecting all roles...\n');
    connection.query('SELECT roles.id, roles.jobTitle, roles.deptRoles, roles.salaryRoles FROM roles RIGHT JOIN departments ON roles.departName = departName;', function (err, res) {
      if (err) throw err;
      cTable(res);
    })
    startApp();
  };
  //VIEW ALL EMPLOYEES
  const readEmployees = () => {
    console.log('Selecting all employees...\n');
    connection.query('SELECT employees.id, employees.FirstName, employees.lastName, employees.jobTitle, employees.manager FROM employees LEFT JOIN departments ON roles.departName = departName;', function (err, res) {
      if (err) throw err;
      cTable(res);
    })
    startApp();
  };

  startApp()
  //ADD DEPARTMENT FUNCTION
  const addDepartments = () => {
    console.log('Adding departments...\n');
    const query = connection.query(
      'INSERT INTO department SET ?',
      inquirer.prompt(
        {
          name: 'department',
          type: 'input',
          message: 'Name the department you like to add'
        })
        .then(res => {
          connection.query(`INSERT INTO departments SET?`,
            {
              name: res.departments,
            },
            function (err, res) {
              if (err) throw err;
              console.log(res.affectedRows + ' department added!\n');
              // Call updateProduct() AFTER the INSERT completes
              updateDepartments();
            });
        }));
  };

  // logs the actual query being run
  // console.log(query.sql);

  //ADD ROLE FUNCTION
  const addRoles = () => {
    inquirer.prompt([
      {
        name: 'role',
        type: 'input',
        message: 'Name the role you like to add',
      },
      {
        name: 'salary',
        type: 'number',
        message: 'What is the salary for this role?',
      },
      {
        type: 'input',
        name: 'departRole',
        message: 'What department id for this role?',
      }
    ])
      .then(res => {
        connection.query(`INSERT INTO roles SET ?;`, {
          title: res.jobTitle,
          salary: res.salaryRole,
          department_id: res.departRole
        },
          function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + ' role added!\n');
            // Call updateProduct() AFTER the INSERT completes
            addDepartments();
          });
      });
  };

  // logs the actual query being run
  // console.log(query.sql);


  //ADD EMPLOYEE FUNCTION
  const addEmployees = () => {
    inquirer.prompt([
      {
        name: 'firstName',
        type: 'input',
        message: 'What is the employee first name?',
      },
      {
        name: 'lastName',
        type: 'input',
        message: 'What is the employee last name?',
      },
      {
        type: 'input',
        name: 'employeeRole',
        message: 'What is the role the employee?',
      },
      {
        name: 'manager',
        type: 'input',
        message: 'Who would be the manager?',
      }

    ])
      .then(res => {
        connection.query(`INSERT INTO employees SET ?`,
          {
            firstName: res.firstName,
            lastName: res.lastName,
            role: res.employeeRole,
            manager: res.manager
          },
          function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + ' employee added!\n');
            // Call updateProduct() AFTER the INSERT completes
            updateEmployees();
          });
      });
  };
  //UPDATE EMPLOYEE ROLE
  const updateEmployees = () => {
    console.log('Updating employee and role...\n');
    const query = connection.query('UPDATE employee SET ? WHERE ?',
      inquirer.prompt([
        {
          name: 'firstName',
          type: 'input',
          message: 'What is the employee first name?',
        },
        {
          name: 'lastName',
          type: 'input',
          message: 'What is the employee last name?',
        }
      ])
        .then((response) => {
          inquirer.prompt({
            name: 'employeeUpdate',
            type: 'input',
            message: 'What is the new role for the employee?'
          })
            .then(
              connection.query(`UPDATE employee SET role_id VALUES ? WHERE employee`,
                {
                  role_id: response.departRole
                },
                (err, res) => {
                  if (err) throw err;
                  console.log(res.affectedRows + ' employee role updated! \n');;
                  // Call updateProduct() AFTER the INSERT completes
                  readsEmployees();
                },

                // console.log(query.sql)


              ));
        }))
  }
}

    // const readDepartment = () => {
    //   console.log('Selecting all departments...\n');
    //   DB.findALLDepartments().then(function (res) {
    //     console.table(res)
    //   })
    //   startApp()
    // };

    //       {
    //         flavor: 'Rocky Road',
    //         price: 3.0,
    //         quantity: 50
    //       },
    //       function(err, res) {
    //         if (err) throw err;
    //         console.log(res.affectedRows + ' product inserted!\n');
    //         // Call updateProduct() AFTER the INSERT completes
    //         updateProduct();
    //       }
    //     );
    //     // logs the actual query being run
    //     console.log(query.sql);
    //   };
    //   //Employee Role Update
    //   updateEmployee = () => {
    //     console.log('SELECT * FROM employees;');
    //     const query = connection.query(
    //       'UPDATE products SET ? WHERE ?',
    //       [
    //         {
    //           quantity: 100
    //         },
    //         {
    //           flavor: 'Rocky Road'
    //         }
    //       ],
    //       function(err, res) {
    //         if (err) throw err;
    //         console.log(res.affectedRows + ' products updated!\n');
    //         // Call deleteProduct() AFTER the UPDATE completes
    //         deleteProduct();
    //       }
    //     );
    //     // logs the actual query being run
    //     console.log(query.sql);
    //   };

    //   deleteProduct = () => {
    //     console.log('Deleting all strawberry ice cream...\n');
    //     const query = connection.query(
    //       'DELETE FROM products WHERE ?',
    //       {
    //         flavor: 'strawberry'
    //       },
    //       function(err, res) {
    //         if (err) throw err;
    //         console.log(res.affectedRows + ' products deleted!\n');
    //         // Call readProducts() AFTER the DELETE completes
    //         readProducts();
    //       }
    //     );
    //     // logs the actual query being run
    //     console.log(query.sql);
    //   };

    //   readProducts = () => {
    //     console.log('Selecting all products...\n');
    //     connection.query('SELECT * FROM products', function(err, res) {
    //       if (err) throw err;
    //       // Log all results of the SELECT statement
    //       console.log(res);

    //   connection.end();
    // };      

    //     });
    //   };

