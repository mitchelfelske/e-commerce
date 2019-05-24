var express = require('express');
var graphqlHTTP = require("express-graphql");
var schema = require('./schema')
require('dotenv').config()
var app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: global,
    graphiql: true
  })
);

app.listen(process.env.GRAPHQL_PORT, () => console.log(`Express graphql listening on port ${process.env.GRAPHQL_PORT}!`));
