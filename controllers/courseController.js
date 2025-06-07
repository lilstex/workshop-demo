const { courses, generateCourseId } = require("../data/storage");
const Course = require("../models/courseModel");

exports.getAllCourses = (req, res) => {
  res.render("courses/list", { courses });
};

exports.renderCreateForm = (req, res) => {
  res.render("courses/form", { course: null });
};

exports.createCourse = (req, res) => {
  const { courseName, teacher, credits } = req.body;
  if (!courseName || !teacher || credits === undefined) {
    return res.status(400).send("Missing required fields");
  }
  const id = generateCourseId();
  const newCourse = new Course({ id, courseName, teacher, credits });
  courses.push(newCourse);
  res.redirect("/courses");
};

exports.getCourseById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const course = courses.find((c) => c.id === id);
  if (!course) {
    return res.status(404).send("Course not found");
  }
  res.render("courses/show", { course });
};

exports.renderEditForm = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const course = courses.find((s) => s.id === id);
  if (!course) {
    return res.status(404).send("Student not found");
  }
  res.render("courses/form", { course });
};

exports.updateCourse = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const course = courses.find((c) => c.id === id);
  if (!course) {
    return res.status(404).send("Course not found");
  }
  const { courseName, teacher, credits } = req.body;
  if (courseName !== undefined) course.courseName = courseName;
  if (teacher !== undefined) course.teacher = teacher;
  if (credits !== undefined) course.credits = credits;

  res.redirect("/courses");
};

exports.deleteCourse = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = courses.findIndex((c) => c.id === id);
  if (idx === -1) {
    return res.status(404).send("Course not found");
  }
  courses.splice(idx, 1);
  res.redirect("/courses");
};
