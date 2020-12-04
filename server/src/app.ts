import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { registerRouter } from "./routes/auth/register";

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

app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", registerRouter);

app.listen(4000, () => console.log("Server running on port: 4000"));
