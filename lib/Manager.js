const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    // call parent constructor
    super(name, id, email);

    this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return {
            officeNumber: this.officeNumber
        }
    }

    getRole() {
        return {
            role: this.role
        }
    }
}

module.exports = Manager;