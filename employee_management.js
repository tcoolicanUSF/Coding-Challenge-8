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
    constructor(name, Driver) {
        this.name = name;
        this.Driver = [];
    }
    addEmployee(Driver) {
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

//Task 3: Create a Manager Class that Inherits from Employee
class Director extends Driver {
    constructor (name, salary, position, team, bonus) {
        super(name, salary, position, team)
        this.bonus = bonus;
    }
}

 //Task 4- Handle Bonuses for Managers
 calculateTotalSalarywithBonus(); {
    let totalSalaryNoBonus = this.getTotalSalary()

    let totalBonusSalary =this.Driver
        .filter(Driver => Driver.position === 'Director')
        .reduce((bonusIndex, Director) => bonusIndex + Director.bonus, 0)

    return totalSalaryNoBonus + totalBonusSalary
}

//Task 5 Create and manage departments and employees
const RBR = new Team ('Red Bull Racing')
const HAS = new Team ('HAAS Racing')

const Mag = new Driver ('Magnussen', 140000, 'F1 Pilot', 'HAAS Racing')
const Ver = new Driver ('Verstappen', 150000, 'F1 Pilot', 'Red Bull Racing')
const Hor = new Director ('Horner', 200000, 'Director', 'Red Bull Racing', 30000)
const Kom = new Director ('Komatsu', 220000, 'Director', 'HAAS Racing', 50000)

RBR.addDriver(Ver)
RBR.addDriver(Hor)
HAS.addDriver(Mag)
HAS.addDriver(Kom)

console.log(`Total Salary for Red Bull Racing: ${RBR.getTeamSalary()}`);
console.log(`Total Salary with coach bonus for Red Bull Racing: ${RBR.calculateTotalSalarywithBonus()}`)
console.log(`Total Salary for HAAS Racing: ${HAS.getTeamSalary()}`)
console.log(`Total Salary with coach bonus for HAAS Racing: ${HAS.calculateTotalSalarywithBonus()}`)
