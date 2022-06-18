const productsModel = require("../model/products.model");
module.exports = {
  Query: {
    products: () => {
      const products = productsModel.getAllProducts();
      return products;
    },
    productByPrice : (root, args) => {
      const products = productsModel.productFilter(args.min, args.max);
      return products;
    },
    productById: (_, args) => {
      const product = productsModel.productById(args.id);
      return product;
    }
  },
};
