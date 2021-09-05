# Graphql-react-node-mongo-apollo

graphql basics
chrome graphiql tool
react-apollo
node
mongo

```javascript

mutation{
  addBook(name:"the tales of kenyan njahi",genre:"African tale",authorId:"6134d545dc4ac474323b0000"){
    name
    genre

  }
}
 ### queries

{
  books{
    name
    genre
  }
}
{
  authors{
    name
    age
  }
}
{
  author(id:"6134d545dc4ac474323b0000"){
    name
    
  age
    books{
      name
    }
  }
}

```
