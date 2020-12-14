 
// Function to check if a starting position is solvable
export function solvableCheck(tilesArray) {
 let number = 1;
 for (let i = 1; i <= tilesArray.length -1; i++) {
   for (let j = i + 1, m = tilesArray.length -1 + 1; j <= m; j++) {
     number *= (tilesArray[i - 1] - tilesArray[j - 1]) / (i - j);
   }
 }
 return Math.round(number) === 1;
}

// Function to check if gameboard is solved
export function winCheck(tilesArray){
  for (let i = 0, l = tilesArray.length; i < l; i++) {
    if (tilesArray[i] !== i) {
      return false;
    }
  }
  return true;
}

// Get the linear index from a row/col pair.
export function getIndex(row, col) {
  const GRID_SIZE = row;
  return parseInt(row, 10) * GRID_SIZE + parseInt(col, 10);
}

// Get the row/col pair from a linear index.
export function getMatrixPosition(index, GRID_SIZE) {
    const row = Math.floor(index / GRID_SIZE);
    const col = index % GRID_SIZE;
  return {row: row, col: col};
}
export function getVisualPosition(row, col, width, height) {
  return {
    x: col * width,
    y: row * height,
  };
}

 export function shuffleTilePositions(tiles) {
  const shuffledTiles = [
    ...tiles
      .filter((t) => t !== tiles.length - 1)
      .sort(() => Math.random() - 0.5),
    tiles.length - 1,
  ];
  return solvableCheck(shuffledTiles) && !winCheck(shuffledTiles)
    ? shuffledTiles
    : shuffleTilePositions(shuffledTiles);
}
  
  export function canSwap(srcIndex, destIndex, GRID_SIZE) {
    const {row: srcRow, col: srcCol} = getMatrixPosition(srcIndex, GRID_SIZE);
    const {row: destRow, col: destCol} = getMatrixPosition(destIndex, GRID_SIZE);
    return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
  }


  
 // simple swapping function
  export function pictoSwap(tiles, src, dest) {
  const tilesResult = [...tiles];
  [tilesResult[src], tilesResult[dest]] = [tilesResult[dest], tilesResult[src]];
  return tilesResult;
}