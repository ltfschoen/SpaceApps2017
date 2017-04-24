import express from 'express';
import path from 'path';
import open from 'open';

import linkApi from './js/api/mockLinkApi';

// GraphQL helper package for Express to mount the GraphQL Schema
import schema from './js/data/schema';
import GraphQLHTTP from 'express-graphql';

const host = '192.168.99.100';
const port = 8080;
let app = express();

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, './js/index.html'));
});

// Mount GraphQL Endpoint for Express server using GraphQLHTTP helper as callback takes GraphQL Schema as arg
app.use('/graphql', GraphQLHTTP({
  schema: schema,
  graphiql: true // GraphiQL with built-in autocomplete for our GraphQL server
}));

app.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://${host}:${port}`);
    console.log("Node app is running at localhost:" + app.get('port'))
  }
})
