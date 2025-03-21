import express from 'express';
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js";
import authRoutes from './routes/auth.route.js';
import cookieParser from "cookie-parser";

dotenv.config()
const app=express();

const PORT=process.env.PORT 

app.use(express.json());

app.use(cookieParser());  // parse cookies

app.use("/api/auth",authRoutes)

app.listen(5001,()=>{
    console.log('Server is running on port:'+PORT)
    connectDB();
})