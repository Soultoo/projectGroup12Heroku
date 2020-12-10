import React, {useState} from 'react';

// function to check if player has completed the game

// Install react motion?

export function Board(){
    let amountOfTiles, boardSize, columns, rows, tile_width, tile_height;
    
    let [numberOfTiles, setNumberOfTiles] = useState([...Array(numberOfTiles)]); 
    // another state used to show finished image before started game
    const [gameStarted, setGameStarted] = useState(false);

    // const gameWon
    
    // tile swapping, use swapTilesCheck

    const startGame = () => {
        shuffleTilesPosition();
        setGameStarted(true);
    }

    const restartGame = () => {
        shuffleTilesPosition();
    }
    

    // depending, on chosen difficulty, there will be a different amount of columns and rows
    // we decide to keep the board size the same no matter difficulty
    // uses the 4x4 as a "middle ground" for the board size, wants the board size to be 
    // not too small but not too big 
    const handleEasyOption = () => {
        columns === 3;
        rows === 3;
        col_row_number === 3;
    }

    const handleMediumOption = () => {
        columns === 4;
        rows === 4;
        col_row_number === 4;
    }

    const handleHardOption = () => {
        columns === 5;
        rows === 5;
        col_row_number === 5;
    }

    // depending on the difficulty, there will be a different amount of tiles
    amountOfTiles === columns * rows;
    boardSize === 400*400;

    tile_height === boardSize/amountOfTiles;
    tile_width === boardSize/amountOfTiles;

    const ButtonOptions=(
        <div>
            <button className="chooseButton">Choose difficulty!</button>
            <div className="difficultyButton">
                <button type="button" onClick={()=>handleEasyOption}>Easy</button>
                <button type="button" onClick={()=>handleMediumOption}>Medium</button>
                <button type="button" onClick={()=>handleHardOption}>Hard</button>
            </div>
        </div>
        )
}

// Function to check if a starting position is solvable
export function solvableCheck() {

}

// Shuffle tiles so that the tiles are at random places in the beginning
export function shuffleTilesPosition(tiles) {
    let tiles_shuffled = [...tiles];
    tiles_shuffled.sort(()=>Math.random()-0.5);
    return tiles_shuffled;

}

// Function to check if the chosen tiles are possible to swap (aka next to each other on the board)
export function swapTilesCheck(oldPositionIndex, newPositionIndex) {
    const {row: oldPositionRow, column: oldPositionCol} = 
    // to get the index position in the board matrix
    {row: Math.floor(oldPositionIndex/col_row_number), 
    column: oldPositionIndex%col_row_number};

    const {row: newPositionRow, column: newPositionCol} = 
    {row: Math.floor(newPositionIndex/col_row_number), 
    column: newPositionIndex%col_row_number};

    return 
}

export function pictoSwap(tiles, oldPosition, newPosition) {
    const tiles_copy = [...tiles];
    tiles_copy[newPosition] = tiles_copy[oldPosition];
    tiles_copy[oldPosition] = tiles_copy[newPosition];
    return tiles_copy;
}


// Function to choose image
export function chooseImage() {

}

// Function to check if the board is solved
export function winCheck(tiles) {

}


export default Board;




