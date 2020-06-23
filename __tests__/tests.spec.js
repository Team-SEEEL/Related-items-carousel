const axios = require('axios');

describe('Api test', () => {
  test('Ajax request to endpoint /api/products should return data', () => {
    return axios.get('http://localhost:3000/api/products')
      .then((results) => {
        expect(results.data.length).toBe(100);
      });
  });
});
