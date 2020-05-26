const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Ryan McDonald', '12345', 'rmcdonald@tbdemail.com', '(512)-123-4567');

    expect(manager.name).toBe('Ryan McDonald');
    expect(manager.id).toBe('12345');
    expect(manager.email).toBe('rmcdonald@tbdemail.com');
    expect(manager.officeNumber).toBe('(512)-123-4567');
});

test('get manager object', () => {
    const manager = new Manager('Ryan McDonald', '12345', 'rmcdonald@tbdemail.com', '(512)-123-4567');

    expect(manager.getOfficeNumber()).toHaveProperty('officeNumber');
    expect(manager.getRole()).toHaveProperty('role');
});