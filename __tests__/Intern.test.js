const Intern = require("../lib/Intern");

test("Ability to set school using constructor function", () => {
  const school = "Hogwarts School of Witchcraft";
  const employee = new Intern("John Dav", 2, "John.dav@bzars.com", school);
  expect(employee.school).toBe(school);
});

test("getRole() should return Intern as a role", () => {
  const role = "Intern";
  const employee = new Intern("John Dav", 1, "John.dav@bzars.com", "John");
  expect(employee.getRole()).toBe(role);
});
