import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_GET_LOBBY } from './graphql';
import * as Styled from './Lobby.styled';
import useQueryParams from '../../hooks/useQueryParams';

export default function Lobby() {
  const queryParams = useQueryParams();
  const lobbyId = queryParams.get("id")
  const { loading, data } = useQuery(QUERY_GET_LOBBY, {
    variables: { id: lobbyId },
  });

  if (loading) return <p>Loading ...</p>;

  if (data) {
    return (
      <Styled.Wrapper>
        <div>{data.getLobby.id}</div>
        <div>{data.getLobby.players.map(player => player)}</div>
        <div>HOST: {data.getLobby.hostPlayerName}</div>
        <div>{data.getLobby.creationDateUnixMilli}</div>
      </Styled.Wrapper>
    );
  }

  return null;
}