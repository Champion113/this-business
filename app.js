// const DB = require("./db/db");
// const inquirer = require("inquirer");
// const cTable = require('console.table');

// function init() {
//     inquirer.prompt([
//         {
//             type: 'list',
//             name: 'begin',
//             message: 'Welcome! What would you like to do?',
//             choices: ['View All Departments', 'View All Roles', 'View All Employees', new inquirer.Separator(), 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role',]
//         }
//     ])
//         .then(res => {
//             console.log(res)
//             switch (res.begin) {
//                 case "View All Departments":
//                     readDepartments()
//                     break;
//                 case "View All Roles":
//                     readRoles()
//                     break;
//                 case "View All Employees":
//                     readEmployees()
//                     break;
//                 case "Add Departments":
//                     addDepartments()
//                     break;
//                 case "Add roles":
//                     addRoles()
//                     break;
//                 case "Add Employees":
//                     addEmployees()
//                     break;
//                 case "Update Employees":
//                     updateEmployees()
//                     break;    
//                 default:
//                     console.log("goodbye")
//             }
//         })
// }

// //ALL DEPARTMENT FUNCTION
// const readDepartments = () => {
//     console.log('Selecting all departments...\n');
//     DB.findALLDepartments().then(function (res) {
//       cTable(res)
//     })
//    init();
//   };


// init()
// // //ALL ROLE FUNCTION
// // const readRoles = () => {
// //     console.log('Selecting all roles...\n');
// //     DB.findALLRoles().then(function (res) {
// //       cTable(res)
// //     })
// //    init();
// //   };


// // init()
// // //ALL EMPLOYEES FUNCTION
// // const readEmployees = () => {
// //     console.log('Selecting all employees...\n');
// //     DB.findAllEmployees().then(function (res) {
// //       cTable(res)
// //     })
// //    init();
// //   };


// // init()
// // //add Department 
// // const addDepartments = () => {
// //     console.log('adding Departments to the database...\n');
// //     DB.findADDDepartments().then(function (res) {
// //       cTable([
// //         inquirer.prompt([
// //             {
// //               name: 'department',
// //               type: 'input',
// //               message: 'Name the department you like to add'
// //             }],
// //             function (err, res) {
// //               if (err) throw err;
// //               console.log(res.affectedRows + ' department added!\n');
// //               // Call updateProduct() AFTER the INSERT completes
// //               updateProduct();
// //             }
// //           )
// //       ]
// //     )
// //    init();
// //     });


// // init()
// // //add Roles
// // const addRoles = () => {
// //     console.log('adding Roles to the database...\n');
// //     DB.findADDRoles().then(function (res) {
// //       cTable(res)
// //     })
// //    init();
// //   };


// // init()
// // //add Employees
// // const addEmployees = () => {
// //     console.log('adding Employees to the database...\n');
// //     DB.findADDEmployees().then(function (res) {
// //       cTable(res)
// //     })
// //    init();
// //   };


// // init()
// // //update Employees
// // const updateEmployees = () => {
// //     console.log('updated Employee to the database...\n');
// //     DB.findAllEmployees().then(function (res) {
// //       cTable(res)
// //     })
// //    init();
// //   };


// // init()}