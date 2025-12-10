const getStudents=(req,res)=>{
    //get data from database
    let stdData={name:"yakanksha",roll:"4236"};
    res.status(200).json({data: stdData});
};
const addStudents=(req,res)=>{
    //add data
    res.status(201).json({message:"Student added successfully"});
}
export {getStudents,addStudents};