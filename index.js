const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');



const app = express();

const MyGraphQLSchema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }
    type Product {  
        id: ID!
        title: String!
        description: String
        price: Float!
        reviews: [Review]
    }
    type Review {
        rating: Int
        comment: String
    }

    type Order {
        date: String
        subtotal: Float
        items: [OrderItem]
    }
    type OrderItem {
        product: Product!
        quantity: Int!
    }

`);

const rootValue = {
    products: [
        {
            id: '1',
            title: 'The Catcher in the Rye',
            description: 'A novel about a kid who is thrown into The Great Depression',
            price: 9.99,
            reviews: [
                { rating: 5, comment: 'I love this book' },
                { rating: 3, comment: 'It was ok' }
            ]
        },
        {
            id: '2',
            title: 'The Hobbit',
            description: 'A novel about a hobbit who is thrown into The Great Depression',
            price: 9.99,
            reviews: [
                { rating: 5, comment: 'I love this book' },
                { rating: 3, comment: 'It was ok' }
            ]


        }
    ],
    orders: [
        {
            date: '2019-01-01',
            subtotal: 29.99,
            items: [
                {
                    product: { 
                        id: '1', 
                        title: 'The Catcher in the Rye', 
                        price: 9.99,
                        reviews: [
                            { rating: 5, comment: 'I love this book' },
                            { rating: 3, comment: 'It was ok' }
                        ] 
                    }, 
                    quantity: 1 
                },
                { 
                    product: 
                    { 
                        id: '2', 
                        title: 'The Hobbit', 
                        price: 9.99,
                        reviews: [
                            { rating: 5, comment: 'I love this book' },
                            { rating: 3, comment: 'It was ok' }
                        ] 
                    }, 
                    quantity: 2 
                }
            ]

        }
    ]

}





app.use(
  '/graphql',
  graphqlHTTP({
    rootValue: rootValue,
    schema: MyGraphQLSchema,
    graphiql: true,
  }),
);

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));