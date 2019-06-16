import { ApolloServer } from 'apollo-server-lambda';
import { schema } from './src/schema';
import { resolvers } from './src/resolver';

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  formatError: error => {
    if (error.message.startsWith("Database Error: ")) {
      return new Error('Internal server error');
    }
    
    // Otherwise return the original error.  The error can also
    // be manipulated in other ways, so long as it's returned.
    return error;
  },
  formatResponse: response => {
    console.log(response);
    return response;
  },
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  playground: {
    endpoint: process.env.REACT_APP_GRAPHQL_ENDPOINT
      ? process.env.REACT_APP_GRAPHQL_ENDPOINT
      : '/dev/graphql',
  },
  tracing: true,
})

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
  },
});