import express from 'express';
import resize_route from './api/imageResizingRoute';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => { 
    res.status(200).send("This is router");
});

routes.use('/resize', resize_route);

export default routes;


