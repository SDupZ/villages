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

export {
  QUERY_GET_LOBBY,
}