 
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
  for(let i = 0; i<tilesArray.length;i++){
      return (tilesArray[i] === i)?true:false;
  }
}

// Get the linear index from a row/col pair.
export function getIndex(row, col) {
  const GRID_SIZE = row;
  return parseInt(row, 10) * GRID_SIZE + parseInt(col, 10);
}

// Get the row/col pair from a linear index.
export function getMatrixPosition(index, row) {
  const GRID_SIZE = row;
  return {
    row: Math.floor(index / GRID_SIZE),
    col: index % GRID_SIZE,
  };
}
export function getVisualPosition(row, col, width, height) {
  return {
    x: col * width,
    y: row * height,
  };
}
/*
 export function shuffleTilePositions(tilesArray) {
  let tiles_shuffled = [...tilesArray];
  tiles_shuffled.sort(() => Math.random() - 0.5);
 }
 */
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
  
 // Function to check if the chosen tiles are possible to swap (aka next to each other on the board)
 
 /*export function swapTilesCheck(tilesArray, index, empty_index) {
  if (index < 0 || index >= tilesArray.length) {
    return false;
  }
   let oldPositionRow = tilesArray[index][0];
  let newPositionRow = tilesArray[empty_index][0];
  let oldPositionCol = tilesArray[index][1];
  let newPositionCol = tilesArray[empty_index][1];
  
  // if the tiles are in the same row, make sure they're only 1 step from each other column wise, using absoloute value
  if (oldPositionRow === newPositionRow){
    return Math.abs(oldPositionCol - newPositionCol === 1);
  }
  // else if the tiles are in the same column, make sure they're only 1 step from each other row wise, using absolute value
  else if (oldPositionCol === newPositionCol){
      return Math.abs(oldPositionRow-newPositionRow === 1);
  }
  else {
      return false;
  }
  }*/
  export function canSwap(srcIndex, destIndex) {
    const { row: srcRow, col: srcCol } = getMatrixPosition(srcIndex);
    const { row: destRow, col: destCol } = getMatrixPosition(destIndex);
    return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
  }
  
 // simple swapping function
 export function pictoSwap(tilesArray, oldPosition, newPosition) {
  const tiles_copy = [...tilesArray];
  tiles_copy[newPosition] = tiles_copy[oldPosition];
  tiles_copy[oldPosition] = tiles_copy[newPosition];
  return tiles_copy;
 }