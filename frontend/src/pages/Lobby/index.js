import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_GET_LOBBY_BY_CODE } from './graphql';
import * as Styled from './Lobby.styled';

export default function Lobby(props) {
  const lobbyCode = '08k6x5';
  const { loading, data } = useQuery(QUERY_GET_LOBBY_BY_CODE, {
    variables: { lobbyCode },
  });

  if (loading) return <p>Loading ...</p>;

  if (data) {
    return (
      <Styled.Wrapper>
        <div>{data.getLobbyByCode.id}</div>
        <div>{data.getLobbyByCode.code}</div>
        <div>{data.getLobbyByCode.players.map(player => player)}</div>
        <div>HOST: {data.getLobbyByCode.hostPlayerName}</div>
        <div>{data.getLobbyByCode.creationDateUnixMilli}</div>
      </Styled.Wrapper>
    );
  }

  return null;
}