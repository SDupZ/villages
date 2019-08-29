import React from 'react';
import * as Styled from './GameBoard.styled';

const gridWidth = 4;
const gridHeight = 4;

const numberOfGridCells = gridWidth * gridHeight;
const cells = Array.from(Array(numberOfGridCells).keys())

export default function GameBoard() {
  return (
    <Styled.GameBoard
      gridWidth={gridWidth}
      gridHeight={gridHeight}
    >
      {cells.map((_, index) => {
        return (
          <Styled.Cell>
            <Styled.CellContent>
              {`Hello ${index}`}
            </Styled.CellContent>
          </Styled.Cell>
        );
      })}
    </Styled.GameBoard>
  )
}