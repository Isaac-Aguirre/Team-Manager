const Employee = require("./Employee");

class Intern extends Employee{
  constructor(id,name,email,school){
    const title = "Intern"
    super(id,name,email,title);
    this.school = school;

  }

  getSchool(){
    return this.school;
  }
}

module.exports = Intern;
