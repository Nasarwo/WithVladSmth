import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRouter from "./router/AuthRouter.js";

const app = express();

//Middleware
dotenv.config();
app.use(express.json());
// что ж я за долбаеб то такой
const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const DB_PASS = process.env.DB_PASS;
const DB_USER = process.env.DB_USER;

//Routes
app.get("/", (req, res) => {
  res.send("Bydlo" + ` PORT ${PORT}`);
});
app.use("/auth", authRouter);

async function start() {
  try {
    await mongoose
      .connect(
        `mongodb+srv://${DB_USER}:${DB_PASS}@vladblogcluster.5do48az.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=VladBlogCluster`
      )
      .then(() => console.log("DB OKAY BRO"))
      .catch((err) => console.log("DB ERROR", err));

    app.listen(PORT, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log(`Server working on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
