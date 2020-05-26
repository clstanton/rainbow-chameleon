const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
    // call parent constructor
    super(name, id, email);

    this.github = github;
    }

    getGithub() {
        return {
            github: this.github
        }
    }

    getRole() {
        return {
            role: this.role
        }
    }
}

module.exports = Engineer;