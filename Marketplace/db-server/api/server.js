require("dotenv").config();
const express = require("express");
const database = require("./database");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// Health check
app.get("/", (request, response) => {
  response.json({ message: "User API is running" });
});

// GET /teachers  – list all teachers
app.get("/users", async (request, response) => {
  try {
    const users = await database.getAllUsers();
    response.json(users);
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: "Failed to fetch users" });
  }
});

// // GET /teachers/:id  – get one teacher
// app.get("/teachers/:id", async (request, response) => {
//   try {
//     const id = Number(request.params.id);
//     const teacher = await database.getTeacherById(id);

//     if (!teacher) {
//       return response.status(404).json({ error: "Teacher not found" });
//     }

//     response.json(teacher);
//   } catch (err) {
//     console.error(err);
//     response.status(500).json({ error: "Failed to fetch teacher" });
//   }
// });

// // POST /teachers  – create new teacher
// app.post("/teachers", async (request, response) => {
//   try {
//     const { first_name, surname } = request.body;
//     const created = await database.createTeacher(first_name, surname);
//     response.status(201).json(created);
//   } catch (err) {
//     console.error(err);
//     response.status(500).json({ error: "Failed to create teacher" });
//   }
// });

// // PUT /teachers/:id  – update a teacher
// app.put("/teachers/:id", async (request, response) => {
//   try {
//     const id = Number(request.params.id);
//     const { first_name, surname } = request.body;
//     const updated = await database.updateTeacher(id, first_name, surname);

//     if (!updated) {
//       return response.status(404).json({ error: "Teacher not found" });
//     }

//     response.json(updated);
//   } catch (err) {
//     console.error(err);
//     response.status(500).json({ error: "Failed to update teacher" });
//   }
// });

// // DELETE /teachers/:id  – delete a teacher
// app.delete("/teachers/:id", async (request, response) => {
//   try {
//     const id = Number(request.params.id);
//     const deleted = await database.deleteTeacher(id);

//     if (!deleted) {
//       return response.status(404).json({ error: "Teacher not found" });
//     }

//     response.json({ success: true });
//   } catch (err) {
//     console.error(err);
//     response.status(500).json({ error: "Failed to delete teacher" });
//   }
// });

// // GET /courses-with-teachers – join example
// app.get("/courses-with-teachers", async (request, response) => {
//   try {
//     const rows = await database.getCoursesWithTeachers();
//     response.json(rows);
//   } catch (err) {
//     console.error(err);
//     response.status(500).json({ error: "Failed to fetch courses" });
//   }
// });

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
