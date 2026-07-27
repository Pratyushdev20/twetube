// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import expreess from "express";

// const app = express();
// ( async () => {
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(erroe) => {
//             console.log("ERRR: ",error);
//             throw error
//         })

//         app.listen(process.env.PORT, () =>{
//             console.log(`app is listening on port ${process.env.PORT}`)
//         })

//     }catch (error){
//         console.error("ERROR: ",error)
//         throw err
//     }
// })

//this is way to connect database in index.js without using another folder



import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
    path :'./env'
})
connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000,() =>{
        console.log(`server is running`);
    })
})
.catch((err) => {
    console.error(`database connection failed !!!, ${err}`)

})