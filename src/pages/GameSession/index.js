import React from 'react';
import gamePhases from 'constants/gamePhases';
import { getInitialCellData } from 'utils';
import GameBoard from './components/GameBoard';
import BlockSelection from './components/BlockSelection';
import * as Styled from './GameSession.styled';

const DEFAULT_GRID_CELLS_X = 4;
const DEFAULT_GRID_CELLS_Y = 4;

const initialCellData = getInitialCellData(DEFAULT_GRID_CELLS_X, DEFAULT_GRID_CELLS_Y);

const players = [
  { id: 1, name: 'Player One' }
];

const initialGameState = {
  turnNumber: 0,
  playersLeftToEndTurn: players,
  phase: gamePhases.BLOCK_SELECTION,
};

const initialBoardState = {
  numberOfCellsX: DEFAULT_GRID_CELLS_X,
  numberOfCellsY: DEFAULT_GRID_CELLS_Y,
  cellData: initialCellData,
};


const PLACE_BLOCK = 'gameState/PLACE_BLOCK';
const SELECT_BLOCK = 'gameState/SELECT_BLOCK';

const boardStateReducer = (state, action) => {
  const { type, payload } = action;
  const { block, cellNumber } = payload;

  let newState = {};

  switch (type) {
    case PLACE_BLOCK:
      const newCellData = [...state.cellData];
      newCellData[cellNumber] = { ...newCellData[cellNumber], block, };
      newState = {
        ...state,
        cellData: newCellData,
      };
      return newState;
    default:
      return state;
  }
};

const gameStateReducer = (state, action) => {
  const { type, payload } = action;
  const { playerId, block } = payload;
  let newState = {};

  switch (type) {
    case PLACE_BLOCK:
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


export default function GameSession() {
  const [gameState, dispatchUpdateGameState] = React.useReducer(gameStateReducer, initialGameState);
  const [boardState, dispatchUpdateBoardState] = React.useReducer(boardStateReducer, initialBoardState);

  const [activeCell, setActiveCell] = React.useState(-1);
  const handleCellClicked = (cellNumber) => {
    setActiveCell(cellNumber);
  }

  const phase = gameState.phase;

  const handlePlaceBlock = () => {
    dispatchUpdateGameState({ type: PLACE_BLOCK, payload: { playerId: 1 } });
    dispatchUpdateBoardState({ type: PLACE_BLOCK, payload: { playerId: 1, cellNumber: activeCell, block: gameState.currentBlock } });
  };

  const renderBlockSelection = () => {
    return (
      <BlockSelection onSelectBlock={(block) => {
        dispatchUpdateGameState({ type: SELECT_BLOCK, payload: { block } });
      }} />
    )
  }
  
  const renderBlockPlacement = () => <div>Phase 2</div>;

  return (
    <Styled.Wrapper>
      <Styled.GameBoard>
        <GameBoard
          boardState={boardState}
          activeCell={activeCell}
          handleCellClicked={handleCellClicked}
        />
      </Styled.GameBoard>

      {phase === gamePhases.BLOCK_SELECTION && renderBlockSelection()}
      {phase === gamePhases.BLOCK_PLACEMENT && renderBlockPlacement()} 
      {phase === gamePhases.BLOCK_PLACEMENT && (
        <React.Fragment>
          <button onClick={handlePlaceBlock}>Confirm block placement</button>
          <div>Players left to end their turn: {gameState.playersLeftToEndTurn.map((player) => (player.name))}</div>
        </React.Fragment>
      )}
    </Styled.Wrapper>
  );
}