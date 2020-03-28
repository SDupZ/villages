import React from 'react';
import { Redirect } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { Hero, Standard } from 'styles/typography';
import useQueryParams from 'hooks/useQueryParams';
import PageWrapper from 'components/PageWrapper';
import { QUERY_GET_LOBBY } from './graphql';
import * as Styled from './Lobby.styled';


export default function Lobby(props) {
  const queryParams = useQueryParams();
  const lobbyId = queryParams.get("id")
  const { currentPlayerName } = props;

  const { loading, data } = useQuery(QUERY_GET_LOBBY, {
    variables: { id: lobbyId },
    skip: !lobbyId,
  });

  if (!lobbyId) return <Redirect to={'/'} />;
  if (loading) return <p>Loading ...</p>;

  if (data) {
    return (
      <PageWrapper>
        <Hero>Lobby Code: {data.getLobby.id}</Hero>
        <Standard>Players in this lobby:</Standard>
        {data.getLobby.players.map(player => {
          return (
            <Standard key={player}>
              {player}
              {player === data.getLobby.hostPlayerName ? ' - (Host)' : ''}
              {player === currentPlayerName ? ' - (You)' : ''}
            </Standard>
          );
        })}
      </PageWrapper>
    );
  }
  return null;
}

Lobby.defaultProps = {
  playerName: '',
}