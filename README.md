# 🏫 School Management System (Workshop Demo)

A simple, beginner-friendly **Node.js + Express** API project for managing students and courses, built with **AI-assisted development** using tools like ChatGPT, Copilot, and DeepSeek.

> 🧠 Perfect for learning how to **build backend APIs** and **collaborate with AI tools** as a software engineer.

---

## 📁 Project Structure

```
workshop-demo/
├── controllers/
│   ├── studentController.js     # Handles student logic
│   └── courseController.js      # Handles course logic
├── routes/
│   ├── studentRoutes.js         # Student API routes
│   └── courseRoutes.js          # Course API routes
├── models/
│   ├── studentModel.js          # In-memory student data
│   └── courseModel.js           # In-memory course data
├── data/
│   └── storage.js               # Shared array-based data store
└── index.js                     # Entry point, sets up Express app
```

---

## 🚀 Project Setup (with AI Assistance)

AI tools help you move faster and more confidently. Here's how this project was scaffolded using **ChatGPT, Copilot, and DeepSeek**.

### 🧱 Step 1: Initialize the Node.js Project

> **Prompt:** > _"Show me the commands to initialize a Node.js + Express project from scratch"_

```bash
mkdir sms-demo
cd sms-demo
npm init -y
npm install express
```

---

### 🧰 Step 2: Generate Express Boilerplate

> **Prompt:** > _"Generate a simple expressjs app and listen on port 3000"_

```js
// index.js
const express = require("express");
const app = express();
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

app.use(express.json());
app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

### 🧠 Step 3: Create Controllers with ChatGPT

> **Prompt:** > _"Write an Express.js controller for a Course entity that can handle: getting all courses, getting a course by ID, creating a course, updating a course, and deleting a course. Use in-memory storage (an array) and assume generateCourseId() gives unique IDs."_

Example AI-generated output:

```js
// courseController.js
const { courses, generateCourseId } = require("../data/storage");

exports.getAllCourses = (req, res) => {
  res.json(courses);
};
```

---

### 🔁 Step 4: Define Routes with Copilot or ChatGPT

> **Prompt:** > _"Generate an Express.js router for the Student controller. Assume the controller is imported as studentController..."_

```js
// studentRoutes.js
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.post("/", studentController.createStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
```

---

### 🐛 Step 5: Debugging With AI

> **Prompt:** > _"I have this controller code in getAllCourses:_

```js
exports.getAllCourses = (req, res) => {
  res.json(course); // error occurs here
};
```

_It says 'Cannot read property find of undefined'. How do I fix it?"_

> **AI Response:**
> Check if `course` is undefined. Likely typo—should be `courses`. Make sure it's correctly imported from your model or data file.

---

## 📦 Running the Project

1. Clone the repo or copy the files.
2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

4. The server will be running at: `http://localhost:3000`

---

## 🧪 Sample API Endpoints

Use these sample `curl` requests to test your endpoints.

### 👩‍🎓 Student APIs

- **Get all students**

```bash
curl http://localhost:3000/api/students
```

- **Add a student**

```bash
curl -X POST http://localhost:3000/api/students \
-H "Content-Type: application/json" \
-d '{"name": "Jane Doe", "age": 15, "class": "10A"}'
```

### 📚 Course APIs

- **Get all courses**

```bash
curl http://localhost:3000/api/courses
```

- **Add a course**

```bash
curl -X POST http://localhost:3000/api/courses \
-H "Content-Type: application/json" \
-d '{"title": "Mathematics", "code": "MATH101"}'
```

---

## 💡 Key Takeaway

This project is a practical example of how **AI tools can assist at every stage** of software development:

- Scaffolding a project
- Generating boilerplate code
- Debugging errors
- Writing documentation
- Learning by doing
