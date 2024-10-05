// Coding Challenge 8: Employee Management System
//Task 1: Create an Employee Class
class Employee {
    constructor(name, salary, position) {
      this.name = name;
      this.salary = salary;
      this.position = position;
    }
    getDetails() {
      return `${this.name} is a ${this.position} earning $${this.salary.toFixed(2)} per year.`;
    }
  }
  // Example usage:
  const employee1 = new Employee("Daniel Ricciardo", 1200000, "F1 Driver");
  console.log(employee1.getDetails());
  // Output: Daniel Ricciardo is a F1 Driver earning $1200000 per year.
  
//Task 2: Create a Department Class
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
}
// Example usage:
const department1 = new Department("Aero Engineering");
const employee2 = new Employee("Mark Webber", 1200000, "Driver");
const employee3 = new Employee("Adrian Newey", 300000, "Aero Analyst");

department1.addEmployee(employee2);
department1.addEmployee(employee3);

console.log(department1.getDepartmentSalary()); //Output: 1500000
