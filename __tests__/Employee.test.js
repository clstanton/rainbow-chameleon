const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Ryan McDonald', '12345', 'rmcdonald@tbdemail.com');

    expect(employee.name).toBe('Ryan McDonald');
    expect(employee.id).toBe('12345');
    expect(employee.email).toBe('rmcdonald@tbdemail.com');
});

test('get employee object', () => {
    const employee = new Employee('Ryan McDonald', '12345', 'rmcdonald@tbdemail.com');

    expect(employee.getName()).toHaveProperty('name');
    expect(employee.getId()).toHaveProperty('id');
    expect(employee.getEmail()).toHaveProperty('email');
    expect(employee.getRole()).toHaveProperty('role');
});