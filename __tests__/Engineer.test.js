const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
  const github = "MohEssmat";
  const employee = new Engineer(
    "Mohamed",
    1,
    "mohamedessmat80@gmail.com",
    github
  );
  expect(employee.github).toBe(github);
});

test("getRole() should return Engineer as a role", () => {
  const role = "Engineer";
  const employee = new Engineer(
    "Mohamed",
    1,
    "mohamedessmat80@gmail.com",
    "MohEssmat"
  );
  expect(employee.getRole()).toBe(role);
});
