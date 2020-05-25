const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Ryan McDonald', '12345', 'rmcdonald@tbdemail.com', 'University of Texas');

    expect(intern.name).toBe('Ryan McDonald');
    expect(intern.id).toBe('12345');
    expect(intern.email).toBe('rmcdonald@tbdemail.com');
    expect(intern.school).toBe('University of Texas');
});