const Express = require('express');
const app = new Express();

const PORT = 3000;

app.use(express.static('dist'));
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
