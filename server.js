// import express from "express";
// import cors from "cors";
// import studentsRouters from "./routers/studentsRouters.js";
// const app=express();

// app.use(express.json());
// app.use(cors());
// app.use('/',studentsRouters);
// app.listen(7000,()=>{
//     console.log("Server running at port 7000");
// });



import express from 'express';
import cors from 'cors';
import mongoose, { mongo } from 'mongoose';
import studentRouter from './routers/studentsRouters.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://yakankshakesavapatnam_db_user:Yakanksha%4009@cluster0.72xoazn.mongodb.net/").then(() => console.log("db connected"))
.catch((error) => console.log(error));

app.use('/', studentRouter);
app.get('/users', (req, res) => {
    console.log("hello this is");
    res.send("hello this is from backend");
})

app.listen(7007, () => {
    console.log("server running at port 7007")
});