import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { registerRouter, loginRouter } from "./routes/auth/";
import { postsRouter } from "./routes/posts";

dotenv.config();

const app = express();
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

app.use("/auth/register", registerRouter);
app.use("/auth/login", loginRouter);
app.use("/posts", postsRouter);

app.listen(4000, () => console.log("Server running on port: 4000"));
