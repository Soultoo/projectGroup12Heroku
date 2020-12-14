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
    style})=>{


return <div class="testBoard">
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
            coordArrayIndex = {coordArray[index]}
            imgDim = {imgDim}
            TILE_COUNT= {TILE_COUNT}
        />

        ))}
        </ul>
            <div>
            {gameWon && gameStarted && <div>You solved pictoSwap!</div>}
        {!gameStarted ?
        (<button onClick={() => handleStartClick()}>Start game!</button>) :
        (<button onClick={() => handleShuffleClick()}>Shuffle again!</button>)}
        </div>
</div>
}
/*
Göra så att efter game started --> difficulty --> reshuffle. Lägga till timer
*/
 
export default BoardView;


/*            imgUrl={imgUrl}
 */