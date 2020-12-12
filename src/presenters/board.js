import React, { useState } from 'react';
import { swapTilesCheck, winCheck, shuffleTilePositions, pictoSwap } from "./boardFunctions";


// function to check if player has completed the game

// Install react motion?

export function Board(props){
    const { rows, columns, images, boardSize,amountOfTiles } = props;
    amountOfTiles=rows*columns;
    boardSize = 400*400;

    const [tilesArray, setTilesArray] = useState([...Array(amountOfTiles).keys()]);
    const [gameStarted, setGameStarted] = useState(false);

    //bottom right square is 'empty'
    const empty_index = tilesArray.length - 1

    const shuffleTiles = () => {
        const shuffledTiles = shuffleTilePositions(tilesArray, rows, columns);
        setTilesArray(shuffledTiles);
    };

      
       
    const pictoSwapTile = (index) => {
        pictoSwap(index);
    };
 
    
    let [numberOfTiles, setNumberOfTiles] = useState([...Array(numberOfTiles)]); 
    // another state used to show finished image before started game
    const [gameStarted, setGameStarted] = useState(false);

    // const gameWon
    
    // tile swapping, use swapTilesCheck

    
    const startGame = () => {
        shuffleTiles();
        setGameStarted(true);
    };
  
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
        
        }
    
    const gameWon = winCheck(tilesArray);
 
    }

export default Board;



    


