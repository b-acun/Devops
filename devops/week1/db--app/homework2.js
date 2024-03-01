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

app.post("/students/add/:name/:midterm_grade/:final_grade", (req, res) => {
  dbConnection.query("INSERT INTO students (name, midterm_grade, final_grade) VALUES (?, ?, ?)",
  [req.params.name, req.params.midterm_grade, req.params.final_grade], (err, results, fields) => {
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

app.get("/students/add/:name/:midterm_grade/:final_grade", (req, res) => {
  dbConnection.query("INSERT INTO students (name, midterm_grade, final_grade) VALUES (?, ?, ?)",
  [req.params.name, req.params.midterm_grade, req.params.final_grade], (err, results, fields) => {
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

