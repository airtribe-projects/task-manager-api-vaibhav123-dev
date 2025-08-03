const express = require("express");
const { tasks } = require("./task.json");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Implement GET /tasks: Retrieve all tasks.
app.get("/tasks", (req, res) => {
  res.status(200).send(tasks);
});

// Implement GET /tasks/:id: Retrieve a specific task by its ID.
app.get("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    return res.status(404).send({ message: "Task not found" });
  }
  res.status(200).send(task);
});

//Implement POST /tasks: Create a new task with the required fields (title, description, completed).

app.post("/tasks", (req, res) => {
  const payload = req.body;
  const { title, description, completed } = payload;
 if (
    typeof title !== "string" ||
    typeof description !== "string" ||
    typeof completed !== "boolean"
  ) {
    return res.status(400).send({ message: "Invalid Payload" });
  }
  const newTask = { id: tasks.length + 1, ...payload };
  tasks.push(newTask);
  res.status(201).send({message: "Task created succesfully", task: newTask});
});

//Implement PUT /tasks/:id: Update an existing task by its ID.

app.put("/tasks/:id", (req, res) => {
  const payload = req.body;
  const { id } = req.params;
  const { title, description, completed } = payload;
if (
    typeof title !== "string" ||
    typeof description !== "string" ||
    typeof completed !== "boolean"
  ) {
    return res.status(400).send({ message: "Invalid Payload" });
  }
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    return res.status(404).send({ message: "Task not found" });
  }
  task.title = payload.title;
  task.completed = payload.completed;
  task.description = payload.description;
  res.status(200).send({message: "Task updated successfully", task: task});
});

//Implement DELETE /tasks/:id: Delete a task by its ID.
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    return res.status(404).send({ message: "Task not found" });
  }
  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
  res.status(200).send({message: "Task deleted successfully"});
});

app.listen(port, (err) => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
