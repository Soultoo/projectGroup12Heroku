import { Tile } from "../presenters/tiles";
import '../board.css'; 
const BoardView=({imgURL, 
    tilesArray, 
    pieceWidth, 
    pieceHeight, 
    handleTileClick, 
    handleStartClick, 
    handleShuffleClick, 
    gameWon, 
    gameStarted, 
    coordArray, 
    imgDim, 
    boxGrid, 
    TILE_COUNT, 
    style,
    handleAddToHighScore})=>{
        let name;
return <div class="testBoard">
     <div>
            <div>
            {gameWon && gameStarted && <div>
                <span>You solved pictoSwap! :) </span>
                <input class="gameinput" onChange={(event)=>name=event.target.value} />
                <button onClick={()=>handleAddToHighScore(name)}>Add your score to the highscore?</button>
            </div>}
            {!gameStarted ?
            (<button onClick={() => handleStartClick()}>Start game!</button>) :
            (<button onClick={() => handleShuffleClick()}>Shuffle again!</button>)}
        </div>
        </div>
    <div class="gamecontainer">
       
        <ul style={style} className="board">
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

// 
//