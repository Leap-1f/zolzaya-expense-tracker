import express, { json, request, response } from "express";
import cors from "cors";
import fs from "fs"
import { error, log } from "console";

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

const DATABASE_URL = "./db.json";


app.listen(port, () => {
  console.log(` hello port: http://localhost:${port}`);
});