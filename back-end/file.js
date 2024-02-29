
import { json } from "express";
import fs from "fs";

// fs.mkdir("text", (err)=>{
//     if (err){
//         console.log (err);
//     } else {
//         console.log ("ajillaa")
//     }
// });
     
// fs.writeFile("writefile.text", "writefile", (err)=>{
//     if (err){
//         console.log (err);
//     } else {
//         console.log ("ajillaa")
//     }
// });

// const data = fs.readFileSync("text.txt");
// console.log (data.toString());

// const data= fs.readFileSync("text.txt");
// fs.readFile("text.txt", (err, data)=>console.log(data.toString()));

const data = { age: 18, name: "Bill" };
fs.writeFileSync("db.json", JSON.stringify(data));

const dataParse = { age: 18, name: "Bill" };
const stringify = JSON.stringify(dataParse);
const parse = JSON.parse(stringify);
console.log(stringify, "===", parse);
