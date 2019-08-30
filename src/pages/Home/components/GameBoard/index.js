import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './GameBoard.styled';


export default function GameBoard(props) {
  const [activeCell, setActiveCell] = React.useState(-1);
  const { boardState } = props;
  const { gridWidth, gridHeight, cellData } = boardState;

  const handleCellClicked = (cellNumber) => {
    setActiveCell(cellNumber);
  }

  return (
    <Styled.GameBoard
      gridWidth={gridWidth}
      gridHeight={gridHeight}
    >
      {cellData.map((_, index) => {
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

GameBoard.props = {
  boardState: PropTypes.object,
}