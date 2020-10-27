const connection = require("./connection")

class DB {
    constructor(connection) {
        this.connection = connection
    }

    findALLDepartments() {
    return this.connection.query("SELECT * FROM departments")
    }
    findALLRoles() {
        return this.connection.query("SELECT * FROM roles")
    }
    findAllEmployees() {
        return this.connection.query("SELECT * FROM employees")
    }
    createDepartment(dept_name) {
        return this.connection.query("INSERT INTO departments SET ?", deptName)
    }
    // getEmployeesByDepartment(departmentID) {
    //     return this.connection.query("SELECT * FROM employee LEFT JOIN on ")
    // }
}

module.exports = new DB(connection)