import express from 'express';   
const teacher = express.Router();

teacher.get('/', (req, res) => { 
    res.send("This is route for /api/teacher");
});

export default teacher;