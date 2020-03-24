import React from 'react';
import { Hero, Standard } from 'styles/typography';
import { Redirect } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import { MUTATION_CREATE_LOBBY } from './graphql';
import * as Styled from './JoinOrCreate.styled';


export default function JoinOrCreate(props) {
  const [playerName, setPlayerName] = React.useState('');
  const [lobbyCode, setLobbyCode] = React.useState('');
  const [createLobby, { data, loading }] = useMutation(MUTATION_CREATE_LOBBY);

  const formRef = React.useRef(null);

  if (data && data.createLobby) {
    const roomCode = data.createLobby.code;
    return <Redirect to={`/lobby?code=${roomCode}`} />;
  }

  const isFormValid = () => {
    return formRef.current.reportValidity();
  };

  const onChangeName = (e) => {
    setPlayerName(e.target.value);
  };
  
  const onChangeLobbyCode = (e) => {
    setLobbyCode(e.target.value);
  };

  const onClickJoin = async (e) => {
    e.preventDefault();
    
    if (isFormValid()) {
      // await joinGame(playerName, lobbyCode);
    }
  };

  const onClickCreate = async (e) => {
    e.preventDefault();

    if (isFormValid()) {
      createLobby({ variables: { playerName }});
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.JoinOrCreate>
        <form ref={formRef}>
          <Styled.FormFieldSet disabled={loading}>
            <Hero>Tiny Towns</Hero>
            <Standard>Player Name</Standard>
            <input value={playerName} onChange={onChangeName} required />
            
            <button onClick={onClickCreate}>Create</button>
            <Standard>Or</Standard>
            <Standard>Lobby Code</Standard>
            <input value={lobbyCode} onChange={onChangeLobbyCode} />
            <button onClick={onClickJoin}>Join</button>
          </Styled.FormFieldSet>
        </form>

        {loading && <div>Loading . . .</div>}
      </Styled.JoinOrCreate>
    </Styled.Wrapper>
  );
}