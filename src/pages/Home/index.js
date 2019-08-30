import React from 'react';
import blockTypes from 'constants/blockTypes';
import { getInitialCellData } from 'utils';
import GameBoard from './components/GameBoard';
import * as Styled from './Home.styled';

const DEFAULT_GRID_WIDTH = 4;
const DEFAULT_GRID_HEIGHT = 4;

const initialCellData = getInitialCellData(DEFAULT_GRID_WIDTH, DEFAULT_GRID_HEIGHT);

const players = [
  { id: 1, name: 'Player One' }
];

const initialGameState = {
  turnNumber: 0,
  currentBlock: blockTypes.BRICK,
  playersLeftToEndTurn: players,
};

const initialBoardState = {
  gridWidth: DEFAULT_GRID_WIDTH,
  gridHeight: DEFAULT_GRID_HEIGHT,
  cellData: initialCellData,
};


const END_TURN_ACTION = 'gameState/END_TURN';

const boardStateReducer = (state, action) => state;

const gameStateReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case END_TURN_ACTION:
      const { playerId } = payload;
      const newState = {
        ...state,
        playersLeftToEndTurn: state.playersLeftToEndTurn.filter(player => player.id !== playerId),
      };
      console.log(newState);
      return newState;
    default:
      return state;
  }
};


export default function Home() {
  const [gameState, dispatchUpdateGameState] = React.useReducer(gameStateReducer, initialGameState);
  const [boardState, dispatchUpdateBoardState] = React.useReducer(boardStateReducer, initialBoardState);


  const handleEndTurn = () => {
    dispatchUpdateGameState({ type: END_TURN_ACTION, payload: { playerId: 1 } })
  };

  return (
    <Styled.Home>
      <div>Players left to end their turn: {gameState.playersLeftToEndTurn.map((player) => (player.name))}</div>
      <GameBoard boardState={boardState} />
      <button onClick={handleEndTurn}>End Turn</button>
    </Styled.Home>
  );
}