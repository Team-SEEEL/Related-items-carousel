const {db} = require('./index.js');
const Products = require('./Products.js');
const faker = require ('faker');

const sampleProducts = [];

for (let i = 0; i < 100; i++) {
  let newProduct = {
    title: faker.commerce.productName(),
    titleUrl: faker.internet.url(),
    imageUrl: faker.image.fashion(),
    rating: (Math.floor((Math.random() * 50) + 1)/10),
    reviewUrl: faker.internet.url(),
    price: faker.commerce.price(),
    prime: faker.random.boolean(),
    bestSeller: faker.random.boolean(),
    department: faker.commerce.department(),
  }
  sampleProducts.push(newProduct);
}

const insertSampleProducts = function() {
  Products.create(sampleProducts)
    .then(() => db.db.close());
};

insertSampleProducts();