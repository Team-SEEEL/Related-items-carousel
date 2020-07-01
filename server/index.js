const express = require('express');
const path = require ('path')
const controllers = require('./controllers.js');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/products', controllers.getProducts);
app.get('/api/products/:index', controllers.getDepartment);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
