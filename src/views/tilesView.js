const tileView=({tile, index, imageChoice})=>
<div>
<div
     className="tile"
     onClick={props.onClick(index)}
     // the empty tile should have opacity 1 so that is is "invisible"
     style={{opacity: (tile===amountOfTiles-1)?0:1,
       ...styleTile,
     }}>
       {imageChoice.length?"":tile+1}
   </div>
</div>