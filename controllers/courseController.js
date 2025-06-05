const { courses, generateCourseId } = require("../data/storage");
const Course = require("../models/courseModel");

exports.getAllCourses = (req, res) => {
  res.json(courses);
};

exports.getCourseById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const course = courses.find((c) => c.id === id);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  res.json(course);
};

exports.createCourse = (req, res) => {
  const { courseName, teacher, credits } = req.body;
  if (!courseName || !teacher || credits === undefined) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const id = generateCourseId();
  const newCourse = new Course({ id, courseName, teacher, credits });
  courses.push(newCourse);
  res.status(201).json(newCourse);
};

exports.updateCourse = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const course = courses.find((c) => c.id === id);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  const { courseName, teacher, credits } = req.body;
  if (courseName !== undefined) course.courseName = courseName;
  if (teacher !== undefined) course.teacher = teacher;
  if (credits !== undefined) course.credits = credits;
  res.json(course);
};

exports.deleteCourse = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = courses.findIndex((c) => c.id === id);
  if (idx === -1) {
    return res.status(404).json({ message: "Course not found" });
  }
  courses.splice(idx, 1);
  res.status(204).send();
};
