import React from 'react';
import PropTypes from 'prop-types';
import blockTypes from 'constants/blockTypes';
import * as Styled from './GameBoard.styled';


export default function GameBoard(props) {
  const { boardState, activeCell, handleCellClicked } = props;
  const { numberOfCellsX, numberOfCellsY, cellData } = boardState;

  return (
    <Styled.GameBoard
      numberOfCellsX={numberOfCellsX}
      numberOfCellsY={numberOfCellsY}
    >
      {cellData.map((cellData, index) => {
        console.log(cellData);
        return (
          <Styled.Cell
            key={index}
            onClick={() => handleCellClicked(index)}
            isActive={index === activeCell}
          >
            {cellData.blockType &&
              <Styled.CellContent color={blockTypes[cellData.blockType].color} />
            }
          </Styled.Cell>
        );
      })}
    </Styled.GameBoard>
  )
}

GameBoard.props = {
  boardState: PropTypes.object,
}