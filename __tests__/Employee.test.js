const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Ryan McDonald', '12345', 'rmcdonald@tbdemail.com');

    expect(employee.name).toBe('Ryan McDonald');
    expect(employee.id).toBe('12345');
    expect(employee.email).toBe('rmcdonald@tbdemail.com');
});