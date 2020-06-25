const Products = require('../db/Products.js');

module.exports = {
  getProducts: (req, res) => {
    Products.find({})
      .then((productsArr) => {
        res.send(productsArr);
      });
  },

  getDepartment: (req, res) => {
    /* Randomizer for different ammounts of related products */
    const numRelProd = Math.floor(Math.random() * (51));

    Products.find({ department: { $regex: req.params.department, $options: 'i' } })
      .limit(numRelProd)
      .then((productsArr) => {
        res.send(productsArr);
      });
  },
};

// Products.find({}).then(results => console.log(results))
