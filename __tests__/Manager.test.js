const Manager = require('../lib/Manager');

test('creates a new manager object', () => {
    const manager = new Manager('Javi', '001', 'Javi@gmail.com', '2144484353');

    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.getRole()).toEqual(manager);
});