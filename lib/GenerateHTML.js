const path = require("path");
const fs = require("fs");
const templatesDir = path.resolve(__dirname, "../templates");

// renderHTML function that will filter through the employees by role and map them to their respective HTML divs, then it pushes the div to the HTML array.
const renderHTML = employees => {
    const html = [];
  
    // filtering managers
    html.push(...employees
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => renderManager(manager))
    );

    // filtering engineers
    html.push(...employees
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => renderEngineer(engineer))
    );

    // filtering interns
    html.push(...employees
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => renderIntern(intern))
    );
    
    return renderMain(html.join(""));
  
  };

  // the function that creates the HTML div for each manager
const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

  // the function that creates the HTML div for each engineer
const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

  // the function that creates the HTML div for each intern
const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

  // the function that takes the html array from the renderHTML function and creates the index.html file 
const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  
  return replacePlaceholders(template, "team", html);
};

// function that replaces all the placeholders in the HTML template based on the values assigned to each class
const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = renderHTML;