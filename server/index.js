const express = require('express');

const controllers = require('./controllers.js');

const app = express();
app.use(express.static('public'));
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/products', controllers.getProducts);
app.get('/api/products/:department', controllers.getDepartment);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
