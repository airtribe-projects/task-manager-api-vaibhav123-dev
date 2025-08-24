# 📝 Task Manager API

A simple **RESTful Task Management API** built using **Node.js** and **Express**. This API allows users to create, read, update, and delete tasks. Tasks are stored in memory using a JSON file (`task.json`).

---

## Overview

The Task API provides endpoints to:

- Retrieve all tasks
- Retrieve a task by ID
- Create a new task
- Update an existing task by ID
- Delete a task by ID

This project is ideal for beginners learning REST API development.

---

### 📥 Installation

1. Install dependencies:

npm install

3. Create a `task.json` file in the root folder with initial tasks:

{
"tasks": [
{
"id": 1,
"title": "Set up environment",
"description": "Install Node.js, npm, and git",
"completed": true
}
]
}

4. Start the server:

node app.js

## Server runs at: [http://localhost:3000]

## 📬 API Endpoints

All requests and responses use JSON.

### 🔹 `GET /tasks`

Fetch all tasks.

### 🔹 `GET /tasks/:id`

Fetch a single task by its ID.

### 🔹 `POST /tasks`

Create a new task.

### 🔹 `PUT /tasks/:id`

Update a task by its ID.

### 🔹 `DELETE /tasks/:id`

Delete a task by its ID.

---

## 🧪 Running Tests

The project includes a test suite using `tap` and `supertest`.

To run the tests:

node test.js

---

## 📁 Project Structure

```
.
├── app.js         # Main Express server and routes
├── test/server.test.js        # Test suite using tap + supertest
├── task.json      # JSON file with sample tasks
└── README.md      # Project documentation
```

---

## ❗ Notes

- This project uses in-memory storage. All data is lost when the server restarts.
- Consider integrating a database like MongoDB or PostgreSQL for production use.

## 🙋‍♂️ Author

**Vaibhav Darvekar**  
[GitHub](https://github.com/vaibhav123-dev)
