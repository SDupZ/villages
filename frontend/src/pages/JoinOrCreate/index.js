import React from 'react';
import { Hero, Standard } from 'styles/typography';
import { useHistory } from "react-router-dom";
import useJoinOrCreate from './useJoinOrCreate';
import * as Styled from './JoinOrCreate.styled';

export default function JoinOrCreate(props) {
  const [playerName, setPlayerName] = React.useState('');
  const [lobbyCode, setLobbyCode] = React.useState('');
  const { joinGame, createGame, isLoading, error } = useJoinOrCreate();
  const history = useHistory();

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
  const onClickCreate = async () => {
    await createGame(playerName);
    // history.push("/lobby");
  }

  return (
    <Styled.Wrapper>
      <Styled.JoinOrCreate>
        <form>
          <Styled.FormFieldSet disabled={isLoading}>
            <Hero>Tiny Towns</Hero>
            <Standard>Player Name</Standard>
            <input value={playerName} onChange={onChangeName} />
            
            <button onClick={onClickCreate}>Create</button>
            <Standard>Or</Standard>
            <Standard>Lobby Code</Standard>
            <input value={lobbyCode} onChange={onChangeLobbyCode} />
            <button onClick={onClickJoin}>Join</button>
          </Styled.FormFieldSet>
        </form>

        {isLoading && <div>Loading . . .</div>}
      </Styled.JoinOrCreate>
    </Styled.Wrapper>
  );
}