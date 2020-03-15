const { gql } = require('apollo-server');

const types = gql`
  scalar DateUnixMilli

  type Lobby {
    id: String
    code: String
    creationDateUnixMilli: DateUnixMilli
  }
`;

const queries = gql`
  type Query {
    getLobbies: [Lobby]
  }
`;

const mutations = gql`
  type Mutation {
    createLobby(playerName: String!): Lobby
  }
`;

module.exports = {
  types,
  queries,
  mutations,
};
