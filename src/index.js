import express from "express";
import { dbConnect } from "./db/dbConnect.js";
import app from "./app.js";

dbConnect().then(() => {
  app.listen(process.env.PORT || 5200, () => {
    console.log(`Server is running at port : ${process.env.Port}`);
  });
});
