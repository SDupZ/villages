import React from 'react';
import { Hero, Standard } from 'styles/typography';
import { Redirect } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import { MUTATION_JOIN_LOBBY, MUTATION_CREATE_LOBBY } from './graphql';
import * as Styled from './JoinOrCreate.styled';


export default function JoinOrCreate(props) {
  const {
    initialPlayerName,
    setGlobalPlayerName,
  } = props;

  const [playerName, setPlayerName] = React.useState(initialPlayerName);
  const [lobbyId, setLobbyId] = React.useState('');
  const [joinLobby, { data: joinLobbyData, joinLobbyLoading }] = useMutation(MUTATION_JOIN_LOBBY);
  const [createLobby, { data: createLobbyData, createLobbyLoading }] = useMutation(MUTATION_CREATE_LOBBY);
  const formRef = React.useRef(null);

  const loading = joinLobbyLoading || createLobbyLoading;

  if (
    (createLobbyData && createLobbyData.createLobby)
    || (joinLobbyData && joinLobbyData.joinLobby)   
  ){
    console.log()
    const lobbyId = (createLobbyData && createLobbyData.createLobby && createLobbyData.createLobby.id)
      || (joinLobbyData && joinLobbyData.joinLobby && joinLobbyData.joinLobby.id);
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
      joinLobby({ variables: { playerName, id: lobbyId }});
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