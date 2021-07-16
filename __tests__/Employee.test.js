const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates a new Employee object', () => {
    const employee = new Employee('Javi');

    expect(employee.id).toEqual(expect.any(Number));
});