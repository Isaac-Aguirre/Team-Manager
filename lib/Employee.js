class Employee{
  constructor(name, id, email, title){
    this.name = name;
    this.id = id;
    this.role = title;
    this.email = email;
  };
  getName(){
    return this.name;
  };
  getID(){
    return this.id;
  }
}


module.exports = Employee;
