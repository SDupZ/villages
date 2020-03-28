import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import JoinOrCreate from 'pages/JoinOrCreate';
import Lobby from 'pages/Lobby';
import GameSession from 'pages/GameSession';
import GlobalStyle from 'styles/globalStyles';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import usePersistedState from './hooks/usePersistedState';

const API_ENDPOINT = 'http://localhost:4000';

const client = new ApolloClient({
  uri: API_ENDPOINT,
});


function App() {
  const [playerName, setPlayerName] = usePersistedState('playerName', '');

  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/lobby"><Lobby /></Route>
          <Route path="/session"><GameSession /></Route>
          <Route path="/">
            <JoinOrCreate
              initialPlayerName={playerName}
              setGlobalPlayerName={setPlayerName}
            />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App;
