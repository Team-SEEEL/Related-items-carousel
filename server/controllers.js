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
    Products.findOne({ index: req.params.index })
      .then((prod) => {
        Products.find({ department: prod.department })
        .then(productsArr => {
          res.send(productsArr);
        });
      })
      .catch((err) => console.log(err))
  },
};

// Products.find({}).then(results => console.log(results))

/* Orginally used to grab photos from page
const numRelProd = Math.floor(Math.random() * (51));
 Products.find({ department: { $regex: req.params.id, $options: 'i' } })
.limit(numRelProd)
.then((productsArr) => {
  res.send(productsArr);
});

*/
