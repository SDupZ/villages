import { gql } from "apollo-boost";

const QUERY_GET_LOBBY_BY_CODE = gql`
  query getLobbyByCode($lobbyCode: String!) {
    getLobbyByCode(lobbyCode: $lobbyCode) {
      id
      code
      players
      hostPlayerName
      creationDateUnixMilli
    }
  }
`;

export {
  QUERY_GET_LOBBY_BY_CODE,
}