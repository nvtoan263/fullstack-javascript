import express from 'express';
import router from './routes/imageResizingRoute';

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/images', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
export default app;