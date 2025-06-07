const { students, generateStudentId } = require("../data/storage");
const Student = require("../models/studentModel");

exports.getAllStudents = (req, res) => {
  res.render("students/list", { students });
};

exports.renderCreateForm = (req, res) => {
  res.render("students/form", { student: null });
};

exports.createStudent = (req, res) => {
  const { firstName, lastName, email, gradeLevel } = req.body;
  if (!firstName || !lastName || !email || !gradeLevel) {
    return res.status(400).send("Missing required fields");
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
  res.redirect("/students");
};

exports.getStudentById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).send("Student not found");
  }
  res.render("students/show", { student });
};

exports.renderEditForm = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).send("Student not found");
  }
  res.render("students/form", { student });
};

exports.updateStudent = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).send("Student not found");
  }

  // Only update provided fields
  const { firstName, lastName, email, gradeLevel } = req.body;
  if (firstName !== undefined) student.firstName = firstName;
  if (lastName !== undefined) student.lastName = lastName;
  if (email !== undefined) student.email = email;
  if (gradeLevel !== undefined) student.gradeLevel = gradeLevel;

  res.redirect("/students");
};

exports.deleteStudent = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = students.findIndex((s) => s.id === id);
  if (idx === -1) {
    return res.status(404).json({ message: "Student not found" });
  }
  students.splice(idx, 1);
  res.redirect("/students");
};
