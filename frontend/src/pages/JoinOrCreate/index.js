import React from 'react';
import { Hero, Standard } from 'styles/typography';
import useJoinOrCreate from './useJoinOrCreate';
import * as Styled from './JoinOrCreate.styled';

export default function JoinOrCreate(props) {
  const [playerName, setPlayerName] = React.useState('');
  const [lobbyCode, setLobbyCode] = React.useState('');
  const { joinGame, createGame } = useJoinOrCreate();

  const onChangeName = (e) => {
    setPlayerName(e.target.value);
  }
  
  const onChangeLobbyCode = (e) => {
    setLobbyCode(e.target.value);
  }

  const onClickJoin = () => {
    // TODO: Some input validations
    joinGame(playerName, lobbyCode);
  }
  const onClickCreate = () => {
    createGame(playerName)    
  }

  return (
    <Styled.Wrapper>
      <Styled.JoinOrCreate>
        <Hero>Heading</Hero>
        <Standard>Player Name</Standard>
        <input value={playerName} onChange={onChangeName} />
        <Standard>Lobby Code</Standard>
        <input value={lobbyCode} onChange={onChangeLobbyCode} />

        <button onClick={onClickJoin}>Join</button>
        <Standard>Or</Standard>
        <button onClick={onClickCreate}>Create</button>
      </Styled.JoinOrCreate>
    </Styled.Wrapper>
  );
}