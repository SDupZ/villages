export const getInitialCellData = (gridWidth, gridHeight) => {
  const numberOfGridCells = gridWidth * gridHeight;
  const cells = Array
    .from(Array(numberOfGridCells).keys())
    .map(() => ({
      block: null,
      isNullBlock: false,
    }));

  return cells;
}
