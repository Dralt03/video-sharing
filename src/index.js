import dotenv from "dotenv";
import express from "express";
import connetDB from "./db/index.js";
import { app } from "./app.js";

connetDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed: ", err);
  });
