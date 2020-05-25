const Engineer = require('../lib/Engineer.js');

test('creates an engineer object',() => {
    const engineer = new Engineer('Ryan McDonald', '12345', 'rmcdonald@tbdemail.com', 'rmcdonald');

    expect(engineer.name).toBe('Ryan McDonald');
    expect(engineer.id).toBe('12345');
    expect(engineer.email).toBe('rmcdonald@tbdemail.com');
    expect(engineer.github).toBe('rmcdonald');
});