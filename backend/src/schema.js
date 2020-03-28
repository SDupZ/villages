const { gql } = require('apollo-server');

const types = gql`
  scalar DateUnixMilli

  type Lobby {
    id: String
    players: [String]
    hostPlayerName: String
    creationDateUnixMilli: DateUnixMilli
  }
`;

const queries = gql`
  type Query {
    getLobby(id: String!): Lobby
  }
`;

const mutations = gql`
  type Mutation {
    joinLobby(id: String!, playerName: String!): Lobby
    createLobby(playerName: String!): Lobby
  }
`;

module.exports = {
  types,
  queries,
  mutations,
};
