// const getStudents=(req,res)=>{
//     //get data from database
//     let stdData={name:"yakanksha",roll:"4236"};
//     res.status(200).json({data: stdData});

// };
// const addStudents=(req,res)=>{
//     //add data
//     res.status(201).json({message:"Student added successfully"});
    
// }
// export {getStudents,addStudents};
import student from "../models/studentsModels.js";

// GET by params
const getStudentByRoll = async (req, res) => {
  try {
    const { stdRoll } = req.params;

    const studentData = await student.findOne({
      stdRoll: Number(stdRoll)
    });

    if (!studentData) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(studentData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST add student
const addStudents = async (req, res) => {
  try {
    const addedData = await student.create(req.body);
    res.status(201).json({
      message: "Student added successfully",
      data: addedData
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET with query filter
const getStudentsFilter = async (req, res) => {
  try {
    const { stdRoll, stdPhone } = req.query;

    const query = {};

    if (stdRoll) {
      query.stdRoll = Number(stdRoll);
    }

    if (stdPhone) {
      query.stdPhone = Number(stdPhone);
    }

    const students = await student.find(query);

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getStudentByRoll, addStudents, getStudentsFilter };