const express = require("express");
const bodyParser = require("body-parser");

const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Mount routes
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the School Management API Workshop Demo!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
