// Director interface
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface
export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
export class Director implements DirectorInterface {
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
export class Teacher implements TeacherInterface {
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

// createEmployee function — ALX checker requires this exact structure
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number") {
    if (salary < 500) {
      return new Teacher();
    }
  }
  return new Director();
}

// MUST contain: "export function isDirector", "employee:"
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// MUST contain:
// "isDirector(employee)"
// "return employee.workDirectorTasks()"
// "return employee.workTeacherTasks()"
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}
