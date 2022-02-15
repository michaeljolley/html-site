import Express from 'express';
const app = new Express();

const PORT = 3000;

app.use(Express.static('dist'));
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
