// Task 1: Creating an Employee Class

class Employee {
    constructor(name, id, department, salary) {
        this.name = name;//name of the employee
        this.id = id;//id of the employee
        this.department = department;//department of the employee
        this.salary = salary;//salary of the employee
    }; // end of constructor
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    } // end of details
    calculateAnnualSalary() {
        return this.salary * 12;//annual salary of the employee
    } 
};// end of employee class

const emp1 = new Employee('Alice Johnson', 101, 'Sales', 5000);

console.log(emp1.getDetails());//Employee: Alice Johnson, ID: 101, Department: Sales, Salary: 5000
console.log("Expected Salary:", emp1.calculateAnnualSalary());//60000


// Task 2: Creating a Manager Class

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) { // constructor for manager class
        super(name, id, department, salary); // calling the constructor of the parent class
        this.teamSize = teamSize; // team size of the manager
    }
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    } // end of details
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1;//bonus of the manager
    }
}; // end of manager class

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());//Manager: John Smith, ID: 201, Department: IT, Salary: 8000, Team Size: 5

console.log("Expected Bonus:", mgr1.calculateBonus());//Expected Bonus: 7200


// Task 3: Creating a Company Class

class Company {
    constructor(name) {
        this.name = name;//name of the company
        this.employees = [];//array of employees
    }
    addEmployee(employee) {
        this.employees.push(employee);//adding employee to the array
    }
    listEmployees() {
      this.employees.forEach(employee => console.log(employee.getDetails()));//listing the employees
    }
    calculateTotalPayroll() {// Add Task 4: Implementing the Payroll System
        return this.employees.reduce((total, employee) => {// calculating the total payroll
            const annualSalary = employee.calculateAnnualSalary();//annual salary of the employee
            const bonus = employee instanceof Manager ? employee.calculateBonus() : 0;//bonus of the manager
            return total + annualSalary + bonus;//total payroll
        }, 0);
    }
    promoteToManager(employee, teamSize) { // Add Task 5: Implementing Promotions
        this.employees = this.employees.map(emp => 
            emp === employee ? new Manager(emp.name, emp.id, emp.department, emp.salary, teamSize) : emp//promoting employee to manager
        );
    }
};// end of company class

const company = new Company("TechCorp");
company.addEmployee(emp1);//adding employee to the company
company.addEmployee(mgr1);//adding manager to the company
company.listEmployees();//listing the employees

console.log("Total Payroll:", company.calculateTotalPayroll());//Total Payroll: 165600

company.promoteToManager(emp1, 3);//promoting employee to manager
company.listEmployees();//listing the employees









