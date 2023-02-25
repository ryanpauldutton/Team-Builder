// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) { // or whatever parameters are required
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return `${name}`
    }
    getId() {
        return `${this.id}`
    }
    getEmail() {
        return `${this.email}`
    }
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;