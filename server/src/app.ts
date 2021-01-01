import * as dotenv from "dotenv";
import express, { response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { registerRouter, loginRouter } from "./routes/auth/";
import { postsRouter } from "./routes/posts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(
  `${process.env.DB_CONNECT}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected to DB")
);

const corsOptions = {
  exposedHeaders: "Token",
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.use("/auth/register", registerRouter);
app.use("/auth/login", loginRouter);
app.use("/posts", postsRouter);

app.listen(PORT, () => console.log("Server running"));
