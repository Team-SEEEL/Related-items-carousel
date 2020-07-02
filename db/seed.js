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
    index: i,
    title: faker.commerce.productName(),
    titleUrl: faker.internet.url(),
    imageUrl: `https://team-seeel-carousel-photos.s3-us-west-1.amazonaws.com/image${i}.jpg`,
    rating: (Math.floor((Math.random() * 50) + 1) / 10),
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