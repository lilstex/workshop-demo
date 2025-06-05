class Student {
  constructor({ firstName, lastName, email, gradeLevel, id }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gradeLevel = gradeLevel;
  }
}

module.exports = Student;
