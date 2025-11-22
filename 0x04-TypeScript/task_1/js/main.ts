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

// Define the function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
}

// Example usage
console.log(printTeacher("John", "Doe")); // Output: John Doe
