import express from 'express';   
const student = express.Router();

student.get('/', (req, res) => { 
    res.send("This is route for /api/student");
});

export default student;