import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import JoinOrCreate from 'pages/JoinOrCreate';
import Lobby from 'pages/Lobby';
import GameSession from 'pages/GameSession';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/join"><JoinOrCreate /></Route>
        <Route path="/lobby"><Lobby /></Route>
        <Route path="/session"><GameSession /></Route>
      </Switch>
    </Router>
  )
}

export default App;
