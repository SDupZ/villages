const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const { joinLobby, createLobby, getLobby } = require('./repository');
const { PubSub, withFilter } = require('apollo-server');

const pubsub = new PubSub();

const PLAYER_JOINED_LOBBY = 'PLAYER_JOINED_LOBBY';

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
    getLobby(_, { id }, { db }) {
      return getLobby(db, id);
    }
  },

  Mutation: {
    async joinLobby(_, { playerName, id }, { db }) {
      console.log(`joinLobby called with playerName: ${playerName}, id: ${id}`);
      const newLobby = await joinLobby(db, id, playerName);

      pubsub.publish(PLAYER_JOINED_LOBBY, { playerJoinedLobby: newLobby });
      return newLobby;
    },
    createLobby(_, { playerName }, { db }) {
      console.log(`createLobby called with playerName: ${playerName}`);
      return createLobby(db, playerName);
    },
  },

  Subscription: {
    playerJoinedLobby: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([PLAYER_JOINED_LOBBY]),
        (payload, variables) => { 
          return payload.playerJoinedLobby.id === variables.id;
        },
      ),
    },
  },
};

module.exports = resolvers;