import express from "express";
// import cors from "cors";
// import fs from "fs"
import { sql } from "./config/database.js";
import { user } from "./mock/users.js";
import bcrypt from "bcrypt";

const port = 8080;
const app = express();

app.use(express.json());
app.use("/users", user);

app.get("/", (req, res)=>{
  res.send ("hello")
});

app.post("/signup", async (req, res)=>{
  const { name, password} = req.body;
  const salt = bcrypt.genSaltSync(1);
  const hashedPasword = await bcrypt.hash(password, salt);
  user.push ({name, password: hashedPasword});
  res.send("succesfully");
} );

app.post("/singin", async (req, res)=>{
  const { name, password } = req.body;
  const filteredUser = user.filter((user)=> user.name ===name);
  const isValid = await bcrypt.compare(password, filteredUser[0].password);

  if(isValid){
    res.send("login succesfully");
  }
  res.send(" not valid");
});

app.listen(port, () => {
  console.log(` Example app listening port: http://localhost:${port}`);
});











// app.use(cors());
// app.use(express.json());

// const DATABASE_URL = "./db.json";

// app.get("/users", async (req, res) => {
//   const data = await sql`SELECT * FROM users`;
//   console.log(data);
//   res.send(data);
// });

// app.post("/users", async (req, res) => {
//   const data =
//     await sql`INSERT INTO users (name, email) VALUES('Zaya', 'zayazoogii@gmail.com') RETURNING *`;
//   console.log(data);
//   res.send(data);
// });
// app.post("/users/createTable", async (req, res) => {
//   const data =
//     await sql`CREATE TABLE users(id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL)`;
//   console.log(data);
//   res.send(data);
// });
// app.delete("/users/dropTable", async (req, res) => {
//   const data = await sql`DROP TABLE users`;
//   console.log(data);
//   res.send(data);
// });



