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
  
