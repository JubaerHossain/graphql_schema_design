# graphql_schema_design

`npm install 

npm run start


`

check in queries 

{
  products {
    title
    price
    reviews {
      rating,
      comment
    }
  }
}

{
  orders{
    date,
    subtotal
    items{
      product{
        title,
        id,
        price
      }
    }
  }
}


# screenshot 
![](Screenshot_1.png)
