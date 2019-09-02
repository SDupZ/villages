import React from 'react';
import gamePhases from 'constants/gamePhases';
import { getInitialCellData } from 'utils';
import GameBoard from './components/GameBoard';
import BlockSelection from './components/BlockSelection';
import * as Styled from './Home.styled';

const DEFAULT_GRID_WIDTH = 4;
const DEFAULT_GRID_HEIGHT = 4;

const initialCellData = getInitialCellData(DEFAULT_GRID_WIDTH, DEFAULT_GRID_HEIGHT);

const players = [
  { id: 1, name: 'Player One' }
];

const initialGameState = {
  turnNumber: 0,
  playersLeftToEndTurn: players,
  phase: gamePhases.BLOCK_SELECTION,
};

const initialBoardState = {
  gridWidth: DEFAULT_GRID_WIDTH,
  gridHeight: DEFAULT_GRID_HEIGHT,
  cellData: initialCellData,
};


const END_TURN = 'gameState/END_TURN';
const SELECT_BLOCK = 'gameState/SELECT_BLOCK';

const boardStateReducer = (state, action) => state;

const gameStateReducer = (state, action) => {
  const { type, payload } = action;
  const { playerId, block } = payload;
  let newState = {};

  switch (type) {
    case END_TURN:
      const playersLeftToEndTurn = state.playersLeftToEndTurn.filter(player => player.id !== playerId);
      newState = {
        ...state,
        playersLeftToEndTurn,
        phase: playersLeftToEndTurn.length > 0 ? state.phase : gamePhases.BLOCK_SELECTION,
      };
      return newState;
    case SELECT_BLOCK:
      newState = {
        ...state,
        phase: gamePhases.BLOCK_PLACEMENT,
        currentBlock: block,
      }
      return newState;
    default:
      return state;
  }
};


export default function Home() {
  const [gameState, dispatchUpdateGameState] = React.useReducer(gameStateReducer, initialGameState);
  const [boardState, dispatchUpdateBoardState] = React.useReducer(boardStateReducer, initialBoardState);

  const phase = gameState.phase;

  const handleEndTurn = () => {
    dispatchUpdateGameState({ type: END_TURN, payload: { playerId: 1 } })
  };

  const renderBlockSelection = () => {
    return (
      <BlockSelection onSelectBlock={(block) => {
        dispatchUpdateGameState({ type: SELECT_BLOCK, payload: { block } })
      }} />
    )
  }
  
  const renderBlockPlacement = () => <div>Phase 2</div>;

  return (
    <Styled.Home>
      {phase === gamePhases.BLOCK_SELECTION && renderBlockSelection()}
      {phase === gamePhases.BLOCK_PLACEMENT && renderBlockPlacement()}

      <Styled.GameBoard><GameBoard boardState={boardState} /></Styled.GameBoard>
      <div>Players left to end their turn: {gameState.playersLeftToEndTurn.map((player) => (player.name))}</div>
      <button onClick={handleEndTurn}>End Turn</button>
    </Styled.Home>
  );
}