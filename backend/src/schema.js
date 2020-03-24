const { gql } = require('apollo-server');

const types = gql`
  scalar DateUnixMilli

  type Lobby {
    id: String
    code: String
    players: [String]
    hostPlayerName: String
    creationDateUnixMilli: DateUnixMilli
  }
`;

const queries = gql`
  type Query {
    getLobbyByCode(lobbyCode: String!): Lobby
  }
`;

const mutations = gql`
  type Mutation {
    joinLobby(playerName: String!, lobbyCode: String!): Lobby
    createLobby(playerName: String!): Lobby
  }
`;

module.exports = {
  types,
  queries,
  mutations,
};
