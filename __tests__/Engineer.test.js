const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer ('Javi', '001', 'Javi@gmail.com', 'JaviD17');

    expect(engineer.getGithub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual(engineer);
});