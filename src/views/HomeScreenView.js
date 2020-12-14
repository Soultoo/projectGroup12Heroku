const HomeScreenView = ({props, nav}) => {
  const boardSize = 3;
  const board = [...Array(boardSize).keys()]; 
  let counter = 1; 
  return (
    <div class="container"> 
      <div class="homescreen-container">
      <h1>PictoSwap</h1>
      <h3>Instructions:</h3>
      <p>Search and choose an image in the PictoSwap library.</p>
      <p>The image then splits into many tiles, and your task is to swap the tiles position to get the original image.</p>
      <p>Swap the tiles position by clicking on the tiles that are adjacent to the empty tile.</p>
      <p>Try to solve the PictoSwap puzzle with the least amount of tiles possible. Good luck ;)</p>
      <div class="button-container">
        <button class="homescreenbutton" onClick = {()=>nav[0]()}>Start a game!</button>
        <button class="homescreenbutton" onClick = {()=>nav[1]()}>High Scores!</button>
        </div>
      </div>
    </div>
  )
}

export default HomeScreenView;
