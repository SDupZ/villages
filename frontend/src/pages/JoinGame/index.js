import React from 'react';
import { Hero, Standard } from 'styles/typography'; 
import * as Styled from './JoinGame.styled';

export default function JoinGame(props) {
  const [playerName, setPlayerName] = React.useState('');
  const [lobbyCode, setLobbyCode] = React.useState('');

  const onChangeName = (e) => {
    setPlayerName(e.target.value);
  }
  
  const onChangeLobbyCode = (e) => {
    setLobbyCode(e.target.value);
  }

  const onClickJoin = () => {}
  const onClickCreate = () => {}

  return (
    <Styled.Wrapper>
      <Styled.JoinGame>
        <Hero>Heading</Hero>
        <Standard>Player Name</Standard>
        <input value={playerName} onChange={onChangeName} />
        <Standard>Room Code</Standard>
        <input value={lobbyCode} onChange={onChangeLobbyCode} />

        <button onClick={onClickJoin}>Join</button>
        <Standard>Or</Standard>
        <button onClick={onClickCreate}>Join</button>
      </Styled.JoinGame>
    </Styled.Wrapper>
  );
}