export const getInitialCellData = (gridWidth, gridHeight) => {
  const numberOfGridCells = gridWidth * gridHeight;
  const cells = Array
    .from(Array(numberOfGridCells).keys())
    .map(() => ({
      isEmpty: true,
    }));

  return cells;
}
