import { gql } from "apollo-boost";

const MUTATION_CREATE_LOBBY = gql`
  mutation CreateLobby($playerName: String! ) {
    createLobby(playerName: $playerName) {
      id
      code
      players
      hostPlayerName
      creationDateUnixMilli
    }
  }
`;

export {
  MUTATION_CREATE_LOBBY,
}