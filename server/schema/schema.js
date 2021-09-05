const Auth = require('basic-auth');
const graphql = require('graphql');
const Book = require('../models/book');
const _=require('lodash');
const { GraphQLObjectType } = require('graphql/type');
const BookType=new GraphQLObjectType({
    name:'',
    fields:()=>({

    })
})
const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{}
})
const Mutation=new GraphQLObjectType({
    name:'Mutation',
    fields:{}
})