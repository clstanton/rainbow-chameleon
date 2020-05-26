const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
    // call parent constructor
    super(name, id, email);

    this.school = school;
    }

    getSchool() {
        return {
            school: this.school
        }
    }

    getRole() {
        return {
        role: this.role
        }
    }
}

module.exports = Intern;