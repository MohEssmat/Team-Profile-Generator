const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
  const officeNumber = "1738";
  const employee = new Manager(
    "Mohamed",
    1,
    "mohamedessmat@gmail.com",
    officeNumber
  );
  expect(employee.officeNumber).toBe(officeNumber);
});

test("getRole() should return Manager as a role", () => {
  const role = "Manager";
  const employee = new Manager(
    "Mohamed",
    1,
    "mohamedessmat@gmail.com",
    "MohEssmat"
  );

  expect(employee.getRole()).toBe(role);
});
