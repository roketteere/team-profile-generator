const inquirer = require("inquirer");
const Style = require("./lib/Style");
const fs = require("fs");
const generateHTML = require("./util/generateHtml");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const engineer = new Engineer("Steve", 12, "steve@gmail.com", "roketteere");
// const intern = new Intern("Larry", 23, "larry@gmail.com", "UW");
// const manager = new Manager("Olivia", 19, "livdydoo@gmail.com", 10);

async function configTeam() {
  const team = [];
  // Team Member Questions
  const newIntern = [
    {
      type: "input",
      name: "name",
      message: "New Intern Name?",
    },
    {
      type: "number",
      name: "id",
      message: "New Intern ID?",
    },
    {
      type: "input",
      name: "email",
      message: "New Intern Email?",
    },
    {
      type: "input",
      name: "school",
      message: "New Intern School?",
    },
  ];
  const newEngineer = [
    {
      type: "input",
      name: "name",
      message: "New Engineer Name?",
    },
    {
      type: "number",
      name: "id",
      message: "New Engineer ID?",
    },
    {
      type: "input",
      name: "email",
      message: "New Engineer Email?",
    },
    {
      type: "input",
      name: "github",
      message: "New Engineer Github Username?",
    },
  ];
  const newManager = [
    {
      type: "input",
      name: "name",
      message: "New Manager Name?",
    },
    {
      type: "number",
      name: "id",
      message: "New Manager ID?",
    },
    {
      type: "input",
      name: "email",
      message: "New Manager Email?",
    },
    {
      type: "number",
      name: "officeNumber",
      message: "New Manager Office Number?",
    },
  ];
  const interns = await inquirer.prompt(newIntern);
  const engineers = await inquirer.prompt(newEngineer);
  const managers = await inquirer.prompt(newManager);
  const intern = new Intern(
    interns.name,
    interns.id,
    interns.email,
    interns.school
  );
  const engineer = new Engineer(
    engineers.name,
    engineers.id,
    engineers.email,
    engineers.school
  );
  const manager = new Manager(
    managers.name,
    managers.id,
    managers.email,
    managers.school
  );
  fs.writeFile(
    "out/index.html",
    generateHTML([manager, engineer, intern]),
    (err) => {
      err ? console.log("error", err) : console.log("Success");
    }
  );
  Style();
}

configTeam();
