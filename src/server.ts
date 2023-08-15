import express from 'express';
const app = express();
const port = 5024;

app.get('/api', (req, res) => { 
    console.log("[INFO] Someone accessing...!!!");
    res.send("Hello world!");
});
app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
  });
app.listen(port, () => console.log(`[INFO] Listeing on port ${port}`));

export default app;