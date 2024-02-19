// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/indexDbConnection.js";
import express from "express";
const app = express();


dotenv.config({
    path: './env'
})

connectDB();





























// ;( async()=>{
// try {
//    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//    app.on("error" , (err)=>{
//     console.log("Error" , err);
//    })
//    app.listen(process.env.port, ()=>{
//     console.log(`App is listing on port ${process.env.port}`)
//    })
// } catch (error) {  
//         console.log("Error" , error);    
// }
// })()