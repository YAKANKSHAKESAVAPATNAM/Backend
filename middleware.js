import express from 'express';
const app=express();

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("api success");
})
app.post('/add-user',(req,res)=>{
    let data=req.body;//we can able to access the data that was passed from the frontend
    console.log(data);//undefined because here the middle ware was missing
    //logic to add the data into the database  1. here we may get some errors-->use catch block
    res.send("Data added");//response sended to the front end

});
app.listen(7000,()=>{
    console.log("Server running at port 7000");
})