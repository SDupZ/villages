require('dotenv').config();

const { ApolloServer } = require('apollo-server');

const {
  types,
  queries,
  mutations,
  subscriptions,
} = require('./schema');
const resolvers = require('./resolvers');
const db = require('./firebase');


const server = new ApolloServer({
  typeDefs: [types, queries, mutations, subscriptions],
  resolvers,
  context: async ({ connection }) => {
    const customContext = { db };
    if (connection) {
      // check connection for metadata
      return connection.context;
    } else {
      return customContext
    }
  }
});

server.listen({
  port: process.env.PORT
}).then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
});

