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

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/lobby"><Lobby /></Route>
          <Route path="/session"><GameSession /></Route>
          <Route path="/"><JoinOrCreate /></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
