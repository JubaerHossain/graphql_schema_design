const products = [
  {
    id: "1",
    title: "The Catcher in the Rye",
    description: "A novel about a kid who is thrown into The Great Depression",
    price: 9.99,
    reviews: [
      { rating: 5, comment: "I love this book" },
      { rating: 3, comment: "It was ok" },
    ],
  },
  {
    id: "2",
    title: "The Hobbit",
    description:
      "A novel about a hobbit who is thrown into The Great Depression",
    price: 6.99,
    reviews: [
      { rating: 5, comment: "I love this book" },
      { rating: 3, comment: "It was ok" },
    ],
  },
];

function getAllProducts() {
  return products;
}

function productFilter(min, max) {
  return products.filter(
    (product) => product.price > min && product.price < max
  );
}

function productById(id) {
  return products.find((product) => product.id === id);
}
function saveProduct(id, title, description, price) {
  const product = {
    id: id,
    title: title,
    description: description,
    price: price,
    reviews: [
      { rating: 5, comment: "I love this book" },
      { rating: 3, comment: "It was ok" },
    ],
  }
  products.push(product);
  return product;
}

module.exports = {
  getAllProducts,
  productFilter,
  productById,
  saveProduct,
};
