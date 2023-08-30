import express from 'express';
import student from './api/student';
import teacher from './api/teacher';

const routes = express.Router();

routes.get('/', (req, res) => { 
    res.send("This is route for /api");
});

routes.use('/student', student);
routes.use('/teacher', teacher);

export default routes;