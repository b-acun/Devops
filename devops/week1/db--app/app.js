"use strict";
const express = require("express");
const dbConnection = require("./helper/mysql");

const app = express();

//check db connection
dbConnection.getConnection((err, connection) => {
  if (err) {
    console.log("Database connection error: ", err);
  } else {
    console.log("Database connected");
  }
});

//query içine satır eklemek için
/*dbConnection.query(
  "INSERT INTO students (name, midterm_grade, final_grade) VALUES ('Seher', 90, 95)",
  (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
    } else {
      console.log("Data inserted successfully");
    }
  }
);*/

//cd yap, node app.js yap
//eklenen öğrencilerin tarayıcıda görünmesi http://localhost:3000/students yazarak tarayıcıyı aç
app.get("/students/:id", (req, res) => {
  dbConnection.query("SELECT * FROM students WHERE id = ?", 
  [req.params.id],
  (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
    } else {
      res.status(200).json({
        status: "success",
        data: results,
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});