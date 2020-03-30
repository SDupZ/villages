import React from 'react';
import { Redirect } from "react-router-dom";
import { useQuery, useSubscription } from '@apollo/react-hooks';
import { Hero, Standard } from 'styles/typography';
import useQueryParams from 'hooks/useQueryParams';
import PageWrapper from 'components/PageWrapper';
import { QUERY_GET_LOBBY, PLAYER_SUBSCRIPTION } from './graphql';

export default function Lobby(props) {
  const queryParams = useQueryParams();
  const lobbyId = queryParams.get("id")
  const { currentPlayerName } = props;

  const { loading, data: queryData } = useQuery(QUERY_GET_LOBBY, {
    variables: { id: lobbyId },
    skip: !lobbyId,
  });

  const { data: subscriptionData } = useSubscription(PLAYER_SUBSCRIPTION,
    { variables: { id: lobbyId } }
  );

  if (!lobbyId) return <Redirect to={'/'} />;
  if (loading) return <p>Loading ...</p>;

  const lobby = (subscriptionData && subscriptionData.playerJoinedLobby) || 
    (queryData && queryData.getLobby);

  if (lobby) {
    return (
      <PageWrapper>
        <Hero>Lobby Code: {lobby.id}</Hero>
        <Standard>Players in this lobby:</Standard>
        {lobby.players.map(player => {
          return (
            <Standard key={player}>
              {player}
              {player === lobby.hostPlayerName ? ' - (Host)' : ''}
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