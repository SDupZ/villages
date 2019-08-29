import styled from 'styled-components';

export const GameBoard = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: ${props => `repeat(${props.gridWidth}, 1fr)`};
  grid-template-rows: ${props => `repeat(${props.gridHeight}, 1fr)`};
  grid-gap: 10px;
`;

export const Cell = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

export const CellContent = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;
