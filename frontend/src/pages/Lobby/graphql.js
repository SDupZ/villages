import { gql } from "apollo-boost";

const QUERY_GET_LOBBY = gql`
  query getLobby($id: String!) {
    getLobby(id: $id) {
      id
      players
      hostPlayerName
      creationDateUnixMilli
    }
  }
`;


const PLAYER_SUBSCRIPTION = gql`
  subscription playerJoinedLobby($id: String!) {
    playerJoinedLobby(id: $id) {
      id
      players
      hostPlayerName
      creationDateUnixMilli
    }
  }
`;

export {
  PLAYER_SUBSCRIPTION,
  QUERY_GET_LOBBY,
}