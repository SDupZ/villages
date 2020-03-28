import { gql } from "apollo-boost";


const MUTATION_JOIN_LOBBY = gql`
  mutation JoinLobby($playerName: String!, $id: String!) {
    joinLobby(playerName: $playerName, id: $id) {
      id
      players
      hostPlayerName
      creationDateUnixMilli
    }
  }
`;

const MUTATION_CREATE_LOBBY = gql`
  mutation CreateLobby($playerName: String!) {
    createLobby(playerName: $playerName) {
      id
      players
      hostPlayerName
      creationDateUnixMilli
    }
  }
`;

export {
  MUTATION_JOIN_LOBBY,
  MUTATION_CREATE_LOBBY,
}