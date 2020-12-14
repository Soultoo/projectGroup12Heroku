import { Tile } from "../presenters/tiles";
import '../board.css'; 
const BoardView=({imgURL, tilesArray, pieceWidth, pieceHeight, handleTileClick, handleStartClick, handleShuffleClick, gameWon, gameStarted, style})=>{
return <div class="testBoard">
        <ul style={style} className="board">
        {tilesArray.map((tile, index) => (
            <Tile
            key={tile}
            index={index}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}

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