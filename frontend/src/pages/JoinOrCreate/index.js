import React from 'react';
import { Hero, Standard } from 'styles/typography';
import { Redirect } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import { MUTATION_CREATE_LOBBY } from './graphql';
import * as Styled from './JoinOrCreate.styled';


export default function JoinOrCreate(props) {
  const {
    initialPlayerName,
    setGlobalPlayerName,
  } = props;

  const [playerName, setPlayerName] = React.useState(initialPlayerName);
  const [lobbyId, setLobbyId] = React.useState('');
  const [createLobby, { data, loading }] = useMutation(MUTATION_CREATE_LOBBY);

  const formRef = React.useRef(null);

  if (data && data.createLobby) {
    const lobbyId = data.createLobby.id;
    return <Redirect to={`/lobby?id=${lobbyId}`} />;
  }

  const isFormValid = () => {
    return formRef.current.reportValidity();
  };

  const onChangeName = (e) => {
    setPlayerName(e.target.value);
  };
  
  const onChangeLobbyId = (e) => {
    setLobbyId(e.target.value);
  };

  const onClickJoin = async (e) => {
    e.preventDefault();
    setGlobalPlayerName(playerName);
    
    if (isFormValid()) {
      // await joinGame(playerName, lobbyId);
    }
  };

  const onClickCreate = async (e) => {
    e.preventDefault();
    setGlobalPlayerName(playerName);

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
            <Standard>Lobby Code</Standard>
            <input value={lobbyId} onChange={onChangeLobbyId} />
            <button onClick={onClickJoin}>Join</button>

            <Standard>Or</Standard>
            <button onClick={onClickCreate}>Create</button>
            
          </Styled.FormFieldSet>
        </form>

        {loading && <div>Loading . . .</div>}
      </Styled.JoinOrCreate>
    </Styled.Wrapper>
  );
}

JoinOrCreate.defaultProps = {
  initialPlayerName: '',
  setGlobalPlayerName: () => {},
};