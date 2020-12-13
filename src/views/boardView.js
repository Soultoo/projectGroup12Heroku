import { Tile } from "../presenters/tiles";
import 'board.css'; 
const boardView=({images, boardSize})=>{
return <div>
            <div
            className="board">
            {tiles.map((tile, index) => (
                <Tile
                index={index}
                tile={tile}
                boardSize={boardSize}
                imageChoice={images[tile]}
                onClick={pictoSwapTile()}
                ></Tile>
            ))}
            </div>
            <div>{gameWon && gameStarted?"You solved pictoSwap!":"Keep trying!"}</div>
                <button onClick={startGame()}>{(gameStarted && !gameWon)?"Start game!":"Shuffle again!"}</button>
            <div className="difficultyButton">
                <button type="button" onClick={()=>handleEasyOption}>Easy</button>
                <button type="button" onClick={()=>handleMediumOption}>Medium</button>
                <button type="button" onClick={()=>handleHardOption}>Hard</button>
                </div>
</div>
}
/*
Göra så att efter game started --> difficulty --> reshuffle. Lägga till timer
*/
 
export default boardView;