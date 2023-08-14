import express from 'express';
const app = express();
const port = 5024;

app.get('/api', (req, res) => { res.send("Hello world!")});
app.listen(port, () => console.log(`Listeing on port ${port}`));

export default app;