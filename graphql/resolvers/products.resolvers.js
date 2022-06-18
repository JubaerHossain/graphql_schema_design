const productsModel = require('../model/products.model');
module.exports = {
  Query: {
    products: () => {
      const products = productsModel.getAllProducts();
      return products;
    },
  },
};
