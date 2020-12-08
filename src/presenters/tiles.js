import {col_row_number} from "./board"

function tilesInGame(props) {
    props = {width, height, tile, imageLink, index, position}
    // testa och se hur det ser ut
    //const topBoard = position[0]*100+5;
   // const leftBoard = position[1]*100+5
    const backgroundLeft = (index%col_row_number)*100+5;
    const backgroundTop = Math.floor(index/col_row_number)*100+5;
    const tileCSS = {
        height: `calc(100%/${col_row_number})`,
        width: `calc(100%/${col_row_number})`,
        positionImage: `-${backgroundLeft}px -${backgroundTop}px`
    };
    
}

return(
<div className="tiles"
style={...tileCSS}>
</div>
);

export default tilesInGame;
