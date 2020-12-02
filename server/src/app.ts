import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(4000, () => console.log("Server running on port: 4000"));
