import styled from 'styled-components';

export const GameBoard = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: ${props => `repeat(${props.numberOfCellsX}, 1fr)`};
  grid-template-rows: ${props => `repeat(${props.numberOfCellsY}, 1fr)`};
  grid-gap: 10px;
`;

export const Cell = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border: 1px solid black;
  box-shadow: ${props => props.isActive ? '1px 1px 10px 5px rgba(0,0,0,0.2)' : 'none'};
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
