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
    price: 9.99,
    reviews: [
      { rating: 5, comment: "I love this book" },
      { rating: 3, comment: "It was ok" },
    ],
  },
];

function getAllProducts() {
  return products;
}

module.exports = {
  getAllProducts,
};
