const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const { joinLobby, createLobby, getLobbyByCode } = require('./repository');

const resolvers = {
  DateUnixMilli: new GraphQLScalarType({
    name: 'DateUnixMilli',
    description: 'Date in unix time milliseconds',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      if (value instanceof Date) {
        return value.getTime();
      }
      return value.toMillis(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),

  Query: {
    getLobbyByCode(_, { lobbyCode }, { db }) {
      return getLobbyByCode(db, lobbyCode);
    }
  },

  Mutation: {
    joinLobby(_, { playerName, lobbyCode }, { db }) {
      console.log(`joinLobby called with playerName: ${playerName}, lobbyCode: ${lobbyCode}`);
      return joinLobby(db, playerName, lobbyCode);
    },
    createLobby(_, { playerName }, { db }) {
      console.log(`createLobby called with playerName: ${playerName}`);
      return createLobby(db, playerName);
    },
  }
};

module.exports = resolvers;