import React from 'react';
import * as Styled from './GameBoard.styled';

const gridWidth = 4;
const gridHeight = 4;

const numberOfGridCells = gridWidth * gridHeight;
const cells = Array.from(Array(numberOfGridCells).keys())

export default function GameBoard() {
  const [activeCell, setActiveCell] = React.useState(-1);

  const handleCellClicked = (cellNumber) => {
    setActiveCell(cellNumber);
  }

  return (
    <Styled.GameBoard
      gridWidth={gridWidth}
      gridHeight={gridHeight}
    >
      {cells.map((_, index) => {
        return (
          <Styled.Cell
            key={index}
            onClick={() => handleCellClicked(index)}
            isActive={index === activeCell}
          >
            <Styled.CellContent />
          </Styled.Cell>
        );
      })}
    </Styled.GameBoard>
  )
}