const uuid = require('uuid');

class Employee {
    constructor(name, email) {
        this.id = uuid.v4();
        this.name = name;
        this.email = email;
        this.role = "Employee";
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return this.role;
    }
}
class Manager extends Employee {
    constructor(name, email, officeNumber) {
        super(name, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}
class Engineer extends Employee {
    constructor(name, email, username) {
        super(name, email);
        this.username = username;
        this.role = "Engineer";
    }
    getGithub() {
        return this.username;
    }
}
class Intern extends Employee {
    constructor(name, email, school) {
        super(name, email);
        this.school = school;
        this.role = "Intern";
    }
    getSchool() {
        return this.school;
    }
}

exports.Employee = Employee;
exports.Manager = Manager
exports.Engineer = Engineer;
exports.Intern = Intern;