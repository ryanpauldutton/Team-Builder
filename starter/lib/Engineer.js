// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) { // and whatever else is necessary
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return `${this.github}`;
    }
    getRole() {
        return 'Engineer'
    }
}

const idea1 = new Engineer('ryan', 1001, 'ryanp', '101git')
console.log(idea1);

module.exports = Engineer;
