require("dotenv").config();
const { Pool } = require("pg");

// Use a pool of connections so our API can serve many requests
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Small helper to run queries
async function query(sql, params = []) {
  const result = await pool.query(sql, params);
  return result;
}

// Task 1: get all teachers
// Write a SELECT that returns teacher_id, first_name, surname
// Order by teacher_id ascending
async function getAllUsers() {
  // TODO: replace this with a real query
  const result = await query(
    //SQL GOES HERE
    // Write a SELECT that returns teacher_id, first_name, surname ordered by the teacher id in ascending order
    `SELECT * FROM users
    ORDER BY user_id;`
  ); 
  console.log (result)
  return result.rows;
}

// // Task 2: get a single teacher by id
// // Use a parameter for the id so we avoid string building
// async function getTeacherById(id) {
//   const result = await query(
//     `SELECT * FROM Teacher WHERE teacher_id = $1`, [id]
//   );
//   // TODO
//   // hint: WHERE teacher_id = $1
//   return result .rows;
// }

// // Task 3: create a new teacher
// // Use INSERT with RETURNING so we get the created row back
// // Create a route that
// // • Accepts first name and surname
// // • Inserts a new teacher using parameterised queries
// // • Returns the created record (Using SQLs RETURNING keyword)
// async function createTeacher(firstName, surname) {
//   const result = await query(
//     'INSERT INTO teacher (first_name, surname) VALUES ($1, $2) RETURNING teacher_id;',
//     [firstName, surname]
//   )
//   // TODO
//   // hint: INSERT INTO teacher (...) VALUES ($1, $2) RETURNING ...
//   return result.rows[0];
// }

// // Task 4: update a teacher
// // Update first_name and surname where teacher_id matches
// // Return the updated row, or null if no row was updated
// // Update a teacher by id.
// //Return a success message.

// async function updateTeacher(id, firstName, surname) {
//   const result = await query(
//     'UPDATE teacher SET first_name = $1, surname = $2 WHERE teacher_id=4'
//     [firstName, surname, id]
//   )
//   // TODO
//   return result.rows;
// }

// // Task 5: delete a teacher
// // Delete the row and return true if one row was deleted
// async function deleteTeacher(id) {
//   // TODO
//   // hint: check result.rowCount
//   return false;
// }

// // Task 6: join example
// // Return course_name, course_length, teacher first_name and surname
// async function getCoursesWithTeachers() {
//   // TODO
//   // hint: JOIN course c ON c.teacher_id = t.teacher_id
//   return [];
// }

module.exports = {
  query,
  getAllUsers,
  // getUsersById,
  // createUser,
  // updateUser,
  // deleteUser
};
