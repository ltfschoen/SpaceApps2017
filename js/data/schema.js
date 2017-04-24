// GraphQL Schema used to mount GraphQL Endpoint for Express server

// Facebook GraphQL package
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';

let counter = 42;
let dataArray = [0, 1, 2];
let dataArrayOfObjects = [
  { counter: 0 },
  { counter: 1 },
  { counter: 2 }
];
let dataArrayOfLinkObjects = [
  { _id: 1, url: "url1" },
  { _id: 2, url: "url2"}
];

let counterType = new GraphQLObjectType({
  name: 'Counter',
  fields: () => ({
    counter: { type: GraphQLInt }
  })
});

let linkType = new GraphQLObjectType({
  name: 'Link',
  fields: () => ({
    _id: { type: GraphQLInt },
    url: { type: GraphQLString }
  })
});

/**
 *  Schema is an instance of GraphQLSchema Class passed
 *  an object with `query` and `mutation` properties
 */
let schema = new GraphQLSchema({
  // Query is an instance of GraphQLObjectType Class with Name and Fields function
  query: new GraphQLObjectType({
    name: 'Query',
    // Fields. Note: All fields have a Type and Resolve function
    fields: () => ({
      // Counter field with scalar integer value
      counter: {
        type: GraphQLInt,
        // Resolve function is executed by GraphQL Server to Data in response to queries to this Field
        resolve: () => { return counter }
      },
      message: {
        type: GraphQLString,
        resolve: () => { return "GraphQL"}
      },
      dataArray: {
        type: new GraphQLList(GraphQLInt),
        resolve: () => { return dataArray }
      },
      dataArrayOfObjects: {
        type: new GraphQLList(counterType),
        resolve: () => { return dataArrayOfObjects }
      },
      dataArrayOfLinkObjects: {
        type: new GraphQLList(linkType),
        resolve: () => { return dataArrayOfLinkObjects } // Or read from db
      }
    })
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      incrementCounter: {
        type: GraphQLInt,
        resolve: () => ++counter
      }
    })
  })
});

export default schema;