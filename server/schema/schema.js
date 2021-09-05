const graphql = require("graphql");
const Book = require("../models/book");
const _ = require("lodash");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList,GraphQLSchema } = require("graphql/type");
const Author = require("../models/author");
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    authorId: {
      type: AuthorType,
      resolve(parent, args) {
        return Author.findById(parent.authorId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
      book:{
          type:BookType,
          args:{id:{type:GraphQLID}},
          resolve(parent,args){
              return Book.findById(args.id)
          }
      },
      books: {
        type: new GraphQLList(BookType),
        resolve(parent, args){
            return Book.find({});
        }
    },
  },
});


const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find({ authorId: parent.id });
            }
        }
    })
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    id: { type: GraphQLID },
  },
});
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});