const Employee = require('../lib/Employee');

test('creates a new Employee object', () => {
    const employee = new Employee('Javi', '001', 'Javi@gmail.com');

    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Javi', '001', 'Javi@gmail.com');
    expect(employee.getName()).toEqual(employee.name);
});

test('gets employee id', () => {
    const employee = new Employee('Javi', '001', 'Javi@gmail.com');
    expect(employee.getId()).toEqual(employee.id);
});

test('gets employee email', () => {
    const employee = new Employee('Javi', '001', 'Javi@gmail.com');
    expect(employee.getEmail()).toEqual(employee.email);
});

test('get employee role', () => {
    const employee = new Employee('Javi', '001', 'Javi@gmail.com');
    expect(employee.getRole()).toEqual(employee);
});
