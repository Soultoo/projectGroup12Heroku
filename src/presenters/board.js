import React, { useState } from 'react';
import { canSwap, winCheck, shuffleTilePositions, pictoSwap } from "./boardFunctions";
import { Tile } from "../presenters/tiles";
import '../board.css'; 
import BoardView from '../views/boardView';

// function to check if player has completed the game

// Install react motion?

export function Board({imageURL}){
    //const { rows, columns, images, boardSize,amountOfTiles } = props;
    const rows = 4;
    const columns =4;
    //const images;
    const GRID_SIZE =4;
    
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
        if(canSwap(tilesArray, index, tilesArray.indexOf(tilesArray.length-1)))
        pictoSwap(index);
    };
    
    // another state used to show finished image before started game
    const gameWon = winCheck(tilesArray);
    
    const handleTileClick = (index) => {
        pictoSwapTile(index)
      }
    
      const handleShuffleClick = () => {
        shuffleTiles()
      }
    
      const handleStartClick = () => {
        shuffleTiles()
        setGameStarted(true)
      }

          
      const coordinates = (rows) => {
        let coordArray = [];
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < rows; j++) {
            coordArray = coordArray.concat({"posX": j, "posY": i});
          }
        }
        console.log(coordArray)
        return coordArray;
      }
        
      function getMeta(url){
        let img = new Image();
        img.addEventListener("load", function(){
          alert(this.naturalWidth + " " + this.naturalHeight)
        })
        img.src = url;
        
        if (img.naturalWidth < img.naturalHeight){

          return [img.naturalWidth, true];
        }
        else {
          return [img.naturalHeight,false];
        }
        }
/*
      const imgDim = () => {
        getMeta(im)
      }
      */
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
        const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
        const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
        const style = {
          width: BOARD_SIZE,
          height: BOARD_SIZE,
        };
return (<BoardView imgURL ={imageURL} tilesArray={tilesArray} pieceWidth={pieceWidth} pieceHeight={pieceHeight} handleTileClick={handleTileClick} handleStartClick={handleStartClick} handleShuffleClick={handleShuffleClick} gameWon={gameWon} gameStarted={gameStarted} coordArray = {coordinates(rows)} imgDim = {getMeta(imageURL)} boxGrid = {GRID_SIZE}/>)    

}

export default Board;


/* <div className="difficultyButton">
        <button type="button" onClick={()=>handleEasyOption}>Easy</button>
        <button type="button" onClick={()=>handleMediumOption}>Medium</button>
        <button type="button" onClick={()=>handleHardOption}>Hard</button>
        </div>
        
        
        imageChoice={images[tile]}*/
    


