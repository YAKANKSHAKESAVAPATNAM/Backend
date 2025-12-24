// import express from 'express';
// import { getStudents, addStudents } from "../controllers/StudentsController.js";
// const router = express.Router();
// router.get('/get-students', getStudents);
// router.post('/add-students', addStudents);
// export default router;  


import express from 'express';
const router = express.Router();
import {getStudentsDetails,addStudents} from '../controllers/studentsController.js';

router.get('/get-students', getStudentsDetails);
router.post('/add-students', addStudents);

export default router;