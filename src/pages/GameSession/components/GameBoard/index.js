import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './GameBoard.styled';


export default function GameBoard(props) {
  const { boardState, activeCell, handleCellClicked } = props;
  const { gridWidth, gridHeight, cellData } = boardState;

  return (
    <Styled.GameBoard
      gridWidth={gridWidth}
      gridHeight={gridHeight}
    >
      {cellData.map((cellData, index) => {
        return (
          <Styled.Cell
            key={index}
            onClick={() => handleCellClicked(index)}
            isActive={index === activeCell}
          >
            <Styled.CellContent>{cellData.block}</Styled.CellContent>
          </Styled.Cell>
        );
      })}
    </Styled.GameBoard>
  )
}

GameBoard.props = {
  boardState: PropTypes.object,
}