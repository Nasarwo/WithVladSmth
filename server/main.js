import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const PORT = 5050;

const app = express();

//Middleware
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Bydlo" + ` PORT ${PORT}`);
});

app.post("/auth/login", (req, res) => {
  const token = jwt.sign(
    {
      email: req.body.email,
      name: req.body.name,
    },
    "secret123"
  );

  res.status(200).json({
    success: true,
    huy: token,
  });
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server working on port ${PORT}`);
});
