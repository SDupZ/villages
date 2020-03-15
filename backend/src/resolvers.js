const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const { getLobbies } = require('./repository');
const { createLobby } = require('./handlers');

const resolvers = {
  DateUnixMilli: new GraphQLScalarType({
    name: 'DateUnixMilli',
    description: 'Date in unix time milliseconds',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),

  Query: {
    getLobbies: () => getLobbies(),
  },

  Mutation: {
    createLobby(_, { playerName }, context) {
      return createLobby(playerName);
    },
  }
};

module.exports = resolvers;