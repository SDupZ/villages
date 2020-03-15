const { ApolloServer } = require('apollo-server');
const {
  types,
  queries,
  mutations,
} = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs: [types, queries, mutations], resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

