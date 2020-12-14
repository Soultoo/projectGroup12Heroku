const HomeScreenView = ({props, nav}) => {
  const boardSize = 3;
  const board = [...Array(boardSize).keys()]; 
  let counter = 1; 
  return (
    <div class="container"> 
      <div class="homescreen-container">
      <h1>PictoSwap</h1>
      <div class="button-container">
        <button class="homescreenbutton" onClick = {()=>nav[0]()}>Start a game!</button>
        <button class="homescreenbutton" onClick = {()=>nav[1]()}>High Scores!</button>
        </div>
      </div>
    </div>
  )
}

export default HomeScreenView;