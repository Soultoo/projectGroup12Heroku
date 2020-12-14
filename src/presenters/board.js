import React, { useState } from 'react';
import { canSwap, winCheck, shuffleTilePositions, pictoSwap } from "./boardFunctions";
import { Tile } from "../presenters/tiles";
import '../board.css'; 
import BoardView from '../views/boardView';

export function Board({imageURL}){
    //const { rows, columns, images, boardSize,amountOfTiles } = props;
    const rows = 4;
    const columns = 4;
    //const images;
    const GRID_SIZE = 4;

    const amountOfTiles=rows*columns;
    const BOARD_SIZE = 320;

    const [tilesArray, setTilesArray] = useState([...Array(amountOfTiles).keys()]);
    const [gameStarted, setGameStarted] = useState(false);
    console.log('is started:', gameStarted);

    const shuffleTiles = () => {
        const shuffledTiles = shuffleTilePositions(tilesArray, rows, columns);
        setTilesArray(shuffledTiles);
    };
 
    const pictoSwapTile = (index) => {
      if (canSwap(index, tilesArray.indexOf(tilesArray.length - 1), GRID_SIZE)) {
        const swappedTiles = pictoSwap(tilesArray, index, tilesArray.indexOf(tilesArray.length - 1))
        setTilesArray(swappedTiles)
      }
    }
    
    const handleTileClick = (index) => {
      console.log(index, 10000)
      pictoSwapTile(index)
    }
    
    const handleShuffleClick = () => {
      shuffleTiles()
    }
    
    const handleStartClick = () => {
      shuffleTiles()
      setGameStarted(true)
    }
    const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
    const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
    const style = {
      width: BOARD_SIZE,
      height: BOARD_SIZE,
    };


    const gameWon = winCheck(tilesArray);
    
return (<BoardView tilesArray={tilesArray} pieceWidth={pieceWidth} pieceHeight={pieceHeight} handleTileClick={(index)=>handleTileClick(index)} handleStartClick={handleStartClick} handleShuffleClick={handleShuffleClick} gameWon={gameWon} gameStarted={gameStarted} BOARD_SIZE={BOARD_SIZE} GRID_SIZE={GRID_SIZE}/>)    

}

export default Board;
