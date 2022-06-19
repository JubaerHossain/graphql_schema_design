const productsModel = require("../model/products.model");
module.exports = {
  Query: {
    products: () => {
      const products = productsModel.getAllProducts();
      return products;
    },
    productByPrice: (root, args) => {
      const products = productsModel.productFilter(args.min, args.max);
      return products;
    },
    productById: (_, args) => {
      const product = productsModel.productById(args.id);
      return product;
    },
  },
  Mutation: {
    addProduct: (_, args) => {
      const product = productsModel.saveProduct(
        args.id,
        args.title,
        args.description,
        args.price
      );
      return product;
    },
    addNewReview: (_, args) => {
      const product = productsModel.addNewReview(
        args.id,
        args.rating,
        args.comment
      );
      return product;
    }
  },
};
