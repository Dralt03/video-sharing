import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

app = express();
app.on("Error", (error) => {
  console.log("ERR: ", error);
  throw error;
});

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(cookieParser());

export { app };
