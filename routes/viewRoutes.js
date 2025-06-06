const express = require("express");
const router = express.Router();
const { students } = require("../data/storage");
const { courses } = require("../data/storage");

// Home
router.get("/", (req, res) => {
  res.render("index");
});

// Students
router.get("/students", (req, res) => {
  res.render("students/list", { students });
});

router.get("/students/new", (req, res) => {
  res.render("students/form", { student: null });
});

router.get("/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send("Student not found");
  res.render("students/show", { student });
});

router.post("/students", (req, res) => {
  const { firstName, lastName, email, gradeLevel } = req.body;
  const id = students.length + 1;
  students.push({ id, firstName, lastName, email, gradeLevel });
  res.redirect("/students");
});

// Courses
router.get("/courses", (req, res) => {
  res.render("courses/list", { courses });
});

router.get("/courses/new", (req, res) => {
  res.render("courses/form", { course: null });
});

router.get("/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Course not found");
  res.render("courses/show", { course });
});

router.post("/courses", (req, res) => {
  const { courseName, teacher, credits } = req.body;
  const id = courses.length + 1;
  courses.push({ id, courseName, teacher, credits: Number(credits) });
  res.redirect("/courses");
});

module.exports = router;
