const { students, generateStudentId } = require("../data/storage");
const Student = require("../models/studentModel");

exports.getAllStudents = (req, res) => {
  res.json(students);
};

exports.getStudentById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(student);
};

exports.createStudent = (req, res) => {
  const { firstName, lastName, email, gradeLevel } = req.body;
  if (!firstName || !lastName || !email || !gradeLevel) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const id = generateStudentId();
  const newStudent = new Student({
    id,
    firstName,
    lastName,
    email,
    gradeLevel,
  });
  students.push(newStudent);
  res.status(201).json(newStudent);
};

exports.updateStudent = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  // Only update provided fields
  const { firstName, lastName, email, gradeLevel } = req.body;
  if (firstName !== undefined) student.firstName = firstName;
  if (lastName !== undefined) student.lastName = lastName;
  if (email !== undefined) student.email = email;
  if (gradeLevel !== undefined) student.gradeLevel = gradeLevel;

  res.json(student);
};

exports.deleteStudent = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = students.findIndex((s) => s.id === id);
  if (idx === -1) {
    return res.status(404).json({ message: "Student not found" });
  }
  students.splice(idx, 1);
  res.status(204).send();
};
