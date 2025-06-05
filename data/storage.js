// data/storage.js
let students = [];
let courses = [];

let nextStudentId = 1;
let nextCourseId = 1;

function generateStudentId() {
  return nextStudentId++;
}

function generateCourseId() {
  return nextCourseId++;
}

module.exports = {
  students,
  courses,
  generateStudentId,
  generateCourseId,
};
