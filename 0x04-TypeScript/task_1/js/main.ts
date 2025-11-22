// Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


/// Define the interface
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Implement the function using `function` keyword
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // Output: J. Doe
// Interface for the constructor
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the class
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implement the class
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: "John", lastName: "Doe" });

console.log(student.displayName());      // Output: John
console.log(student.workOnHomework());   // Output: Currently working
