const express = require('express');
const controllers = require('./controllers.js');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "/../public")));

const port = 3002;

// app.get('/', (req, res) => res.sendFile(`${__dirname}/../public/bundle.js`));

app.get('/api/products', controllers.getProducts);
app.get('/api/products/:index', controllers.getDepartment);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
