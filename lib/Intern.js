const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
    // call parent constructor
    super(name, id, email);

    this.school = school;
    }
};

module.exports = Intern;