import express, { json, request, response } from "express";
import cors from "cors";
import fs from "fs"
import { error, log } from "console";

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

const DATABASE_URL = "./db.json";

let user = [];
const data = fs.readFileSync(DATABASE_URL, (error));
user = JSON.parse(data)

app.get("/user", (request, response) => {
  response.json(user);
});

app.post("/user", (request, response) => {
  user.push(request.body);
  fs.writeFileSync(DATABASE_URL, JSON.stringify(user));
  response.send(user)
});
app.delete("user/:id", (request, response) => {
  const { id } = request.params;

  try {
    const previousData = fs.readFileSync(DATABASE_URL);
    let data = json.params(previousData);
    data = data.filter((el) => el.id !== id);
    fs.writeFileSync(DATABASE_URL, JSON.stringify(data));
    response.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(` hello port: http://localhost:${port}`);
});