import {tilesInGame} from "./tiles";
import {} from "./board";

return (
    <>
    <ul className="board">
        {tilesInGame.map((tile, index) =>(
            <tilesInGame
            index = {index}
            imageLink = {imageLink}
            tile = {tile}
            key = {tile}
            height = {tile_height}
            width = {tile_width}
            />
        ))}
    </ul>
    {gameStarted === false? (<button onClick={()=>Board.startGame()}>Play!</button>):(<button onClick={()=>Board.restartGame()}>Restart!</button>) }
    </>
)

