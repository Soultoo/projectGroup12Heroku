import Board from "./Board";
 
// Function to check if a starting position is solvable
export function solvableCheck(tilesArray) {
 let number = 1;
 for (let i = 1; i <= empty_index; i++) {
   for (let j = i + 1, m = empty_index + 1; j <= m; j++) {
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
  
 export function shuffleTilePositions(tilesArray) {
  let tiles_shuffled = [...tilesArray];
  tiles_shuffled.sort(() => Math.random() - 0.5);
 }
  
 // Function to check if the chosen tiles are possible to swap (aka next to each other on the board)
 export function swapTilesCheck(index) {
  if (index < 0 || index >= Board.tilesArray.length) {
    return false;
  }
   let oldPositionRow = Board.tilesArray[index][0];
  let newPositionRow = Board.tilesArray[Board.empty_index][0];
  let oldPositionCol = Board.tilesArray[index][1];
  let newPositionCol = Board.tilesArray[Board.empty_index][1];
  
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
  }
  
 // simple swapping function
 export function pictoSwap(tilesArray, oldPosition, newPosition) {
  const tiles_copy = [...tilesArray];
  tiles_copy[newPosition] = tiles_copy[oldPosition];
  tiles_copy[oldPosition] = tiles_copy[newPosition];
  return tiles_copy;
 }