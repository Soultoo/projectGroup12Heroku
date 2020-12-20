import { Tile } from "../presenters/tiles";
import '../board.css'; 
const BoardView=({imgURL, 
    tilesArray, 
    pieceWidth, 
    pieceHeight, 
    handleTileClick, 
    handleStartClick, 
    handleRestartClick, 
    gameWon, 
    gameStarted, 
    coordArray, 
    imgDim, 
    boxGrid, 
    TILE_COUNT, 
    style,
    handleAddToHighScore,
    counter,
    difficulty
    })=>{
        let name = "No name";
        
        return <div class="testBoard">

        <div>
            <div>
            {gameWon && gameStarted && <div>
                <span>Well done! Add a name for highscore :) </span>
                <input class="gameinput" onChange={(event)=>name=event.target.value} />
                <button onClick={()=>handleAddToHighScore(name, counter, difficulty.toString())}>Add highscore</button>
            </div>}
            {!gameStarted ?
            (<button onClick={() => handleStartClick()}>Start game!</button>) :
            (<button onClick={() => handleRestartClick()}>Restart</button>)}
        </div>
        </div>
    <div class="gamecontainer">
       
        <ul style={style} className={"board"+difficulty.toString()}>
        {tilesArray.map((tile, index ) => (
            <Tile class = "tiletile"
            key={tile}
            index={index}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            imgUrl = {imgURL}
            boxGrid = {boxGrid}
            handleTileClick={handleTileClick}
            imgDim = {imgDim}
            TILE_COUNT= {TILE_COUNT}
        />

        ))}
        </ul>
    </div>
    
    </div>
    
}
/*
Göra så att efter game started --> difficulty --> reshuffle. Lägga till timer
*/
 
export default BoardView;


