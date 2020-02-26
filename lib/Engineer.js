const Employee = require("./Employee");

class Engineer extends Employee{
  constructor(name,id,email,github){
    const title = "engineer"
    super(name,id,email,title);
    this.github = github;

  }
  getGithub(){
    return this.github;
  }
};

module.exports = Engineer;
