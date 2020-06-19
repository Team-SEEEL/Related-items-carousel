const Products = require('../db/Products.js');

module.exports = {
  getProducts: (req, res) => {
    Products.find({})
      .then(productsArr => {
        res.send(productsArr);
      });
  }
}

// Products.find({}).then(results => console.log(results))