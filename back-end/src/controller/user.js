import { sql } from "../../config/database.js"

export const getAllUsers = async(req, res) =>{
    try{
        const data = await sql`CREATE TABLE users`;
 res.send(data);
} catch (err){
 console.log(err);
}
 };

