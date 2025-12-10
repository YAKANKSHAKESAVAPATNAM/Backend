import express from "express";
import studentsRouters from "./routers/studentsRouters.js";
const app=express();
app.use(express.json());
app.use('/',studentsRouters);
app.listen(7000,()=>{
    console.log("Server running at port 7000");
});
