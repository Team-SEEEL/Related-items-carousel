const express = require('express');

const controllers = require('./controllers.js');

const app = express();
app.use(express.static('../client/dist/index.html'));
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/products', controllers.getProducts);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));