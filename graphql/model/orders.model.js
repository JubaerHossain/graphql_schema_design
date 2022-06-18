const orders = [
  {
    date: "2019-01-01",
    subtotal: 29.99,
    items: [
      {
        product: {
          id: "1",
          title: "The Catcher in the Rye",
          price: 9.99,
          reviews: [
            { rating: 5, comment: "I love this book" },
            { rating: 3, comment: "It was ok" },
          ],
        },
        quantity: 1,
      },
      {
        product: {
          id: "2",
          title: "The Hobbit",
          price: 9.99,
          reviews: [
            { rating: 5, comment: "I love this book" },
            { rating: 3, comment: "It was ok" },
          ],
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
    getAllOrders
};