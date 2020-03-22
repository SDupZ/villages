const { ApolloServer } = require('apollo-server');
const {
  types,
  queries,
  mutations,
} = require('./schema');
const resolvers = require('./resolvers');
const db = require('./firebase');

const server = new ApolloServer({
  typeDefs: [types, queries, mutations],
  resolvers,
  context: () => {
    return { db };
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

