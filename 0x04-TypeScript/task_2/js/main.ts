// Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function — ALX checker requires this structure
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number") {
    if (salary < 500) {
      return new Teacher();
    }
  }
  return new Director();
}

// Test output
console.log(createEmployee(200));    // Teacher
console.log(createEmployee(1000));   // Director
console.log(createEmployee("$500")); // Director



// Interfaces for Employees
export interface Director {
  firstName: string;
  lastName: string;
  workDirectorTasks(): string;
}

export interface Teacher {
  firstName: string;
  lastName: string;
  workTeacherTasks(): string;
}

// Function to create employee
export function createEmployee(salary: number): Director | Teacher {
  if (salary < 500) {
    return {
      firstName: 'John',
      lastName: 'Doe',
      workTeacherTasks() {
        return 'Getting to work';
      }
    };
  }
  return {
    firstName: 'Jane',
    lastName: 'Smith',
    workDirectorTasks() {
      return 'Getting to director tasks';
    }
  };
}

// Type predicate
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// executeWork function
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// Test outputs
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
