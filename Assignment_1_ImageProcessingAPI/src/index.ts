import express from 'express';
import routes from './routes/router';

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/', routes);

app.get('/', (req: express.Request, res: express.Response): void => { 
    res.status(200).send("This is server and is running");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
export default app;