class Course {
  constructor({ courseName, teacher, credits, id }) {
    this.id = id;
    this.courseName = courseName;
    this.teacher = teacher;
    this.credits = credits;
  }
}

module.exports = Course;
