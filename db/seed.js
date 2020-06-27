const db = require('./index.js');
const Products = require('./Products.js');
const faker = require('faker');

Products.db.dropDatabase((err, results) => {
  if (err) {
    console.log (err);
  } else {
    console.log(results);
  }
});

const sampleProducts = [];

for (let i = 0; i < 100; i++) {
  const newProduct = {
    title: faker.commerce.productName(),
    titleUrl: faker.internet.url(),
    imageUrl: `https://loremflickr.com/160/160/products?random=${i}`,
    rating: (Math.floor((Math.random() * 50) + 1) / 10),
    reviewUrl: faker.internet.url(),
    price: faker.commerce.price(),
    prime: faker.random.boolean(),
    bestSeller: faker.random.boolean(),
    department: faker.commerce.department(),
  };
  sampleProducts.push(newProduct);
}


const insertSampleProducts = function () {
  Products.create(sampleProducts)
    .then(() => db.close());
};

insertSampleProducts();