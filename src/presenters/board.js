import React, { useState } from 'react';
import { canSwap, winCheck, shuffleTilePositions, pictoSwap } from "./boardFunctions";
import { Tile } from "../presenters/tiles";

// function to check if player has completed the game

// Install react motion?

export function Board(){
    //const { rows, columns, images, boardSize,amountOfTiles } = props;
    const rows = 4;
    const columns =4;
    //const images;

    const amountOfTiles=rows*columns;
    const boardSize = 400*400;

    const [tilesArray, setTilesArray] = useState([...Array(amountOfTiles).keys()]);
    const [gameStarted, setGameStarted] = useState(false);

    //bottom right square is 'empty'
    const empty_index = tilesArray.length - 1

    const shuffleTiles = () => {
        const shuffledTiles = shuffleTilePositions(tilesArray, rows, columns);
        setTilesArray(shuffledTiles);
    };
 
    const pictoSwapTile = (index) => {
        if(canSwap(tilesArray, index, tilesArray.indexOf(tilesArray.length-1)))
        pictoSwap(index);
    };
    
    // another state used to show finished image before started game
    const gameWon = winCheck(tilesArray);
    
    const startGame = () => {
        shuffleTiles();
        setGameStarted(true);
    };
  /*
    const handleEasyOption = () => {
        let columns = 3;
        let rows = 3;
        let col_row_number = 3;
         
        }
           
    const handleMediumOption = () => {
        let columns = 4;
        let rows = 4;
        let col_row_number = 4;
        
        }
    const handleHardOption = () => {
        let columns = 5;
        let rows = 5;
        let col_row_number = 5;
        
        }*/
     
return (<div>
    <div
    className="board">
    {tilesArray.map((tile, index) => (
        <Tile
        index={index}
        tile={tile}
        boardSize={boardSize}
        onClick={pictoSwapTile()}
        BOARD_SIZE={boardSize}
        GRID_SIZE={rows}
        TILE_COUNT={rows*columns}

        ></Tile>
    ))}
    </div>
    <div>{gameWon && gameStarted?"You solved pictoSwap!":"Keep trying!"}</div>
        <button onClick={startGame()}>{(gameStarted && !gameWon)?"Start game!":"Shuffle again!"}</button>
   
</div>)    

}

export default Board;


/* <div className="difficultyButton">
        <button type="button" onClick={()=>handleEasyOption}>Easy</button>
        <button type="button" onClick={()=>handleMediumOption}>Medium</button>
        <button type="button" onClick={()=>handleHardOption}>Hard</button>
        </div>
        
        
        imageChoice={images[tile]}*/
    


