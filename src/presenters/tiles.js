import React from "react";
import { Motion, spring } from "react-motion";
import { getMatrixPosition, getVisualPosition } from "./boardFunctions";

export function Tile(props) {
  const { tile,
     index,
      width, 
      height, 
      imgUrl,  
      boxGrid,
      handleTileClick, 
      imgDim, 
      TILE_COUNT 
       } = props;
  const { row:row, col:col } = getMatrixPosition(index, boxGrid);
  const visualPos = getVisualPosition(row, col, width, height);
  //console.log(visualPos, "visualPos")
  //console.log(`-${(100) * (coordArrayIndex.posX)}%`)
  //console.log(`-${(100) * (coordArrayIndex.posY)}%`)
  //console.log(boxGrid, 2) // row = NaN - fixed!!
  const BOARD_SIZE=imgDim[0];
  const tileStyle = {

    //width: `calc(100% / ${boxGrid})`,
    //height: `calc(100% / ${boxGrid})`,
    translateX: visualPos.x,
    translateY: visualPos.y,
    backgroundImage: `url(${imgUrl})`, 
   // backgroundSize: imgDim[1] ? `${boxGrid*100}%` : `auto ${boxGrid*100}%`, //kan skala om bilden här!, hitta dim av bilden, skala om efter minsta sidan
   backgroundSize: `${BOARD_SIZE * (1+1/boxGrid)}px`,

    //backgroundPosition: `-${(100) * (coordArrayIndex.posX)}% -${(100) * (coordArrayIndex.posY)}%`,
    backgroundPosition: `${(100 / boxGrid) * (tile % boxGrid)}% ${(100 / boxGrid) * (Math.floor(tile / boxGrid))}%`,

    
    
   
  };
  const motionStyle = {
    translateX: spring(visualPos.x),
    translateY: spring(visualPos.y)
  }
  return (
    <Motion style={motionStyle}>
      {({ translateX, translateY }) => (
        
        <li 
          style={{
            ...tileStyle,
            transform: `translate3d(${translateX}/4px, ${translateY}/4px, 0)`,
            // Is last tile?
            opacity: tile === TILE_COUNT - 1 ? 0 : 1,
          }}
          className="tile"
          onClick={() => handleTileClick(index)}
        >
          {!imgUrl && `${tile + 1}`}
          
          
        </li>
        
      )}
    </Motion>
  );
}

export default Tile;
