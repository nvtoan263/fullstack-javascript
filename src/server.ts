import express from 'express';
import routes from './routes';
const app = express();
const port = 3000;

app.use('/api',routes);
app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
  });
app.listen(port, () => console.log(`[INFO] Listeing on port ${port}`));

export default app;