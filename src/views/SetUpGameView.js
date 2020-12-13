import { Search } from "../presenters/search";

const SetUpGameView = ({props, nav}) => {
  return (
    <div>
      <p>
        <button class="back" onClick = {()=>nav[0]()}>Back</button>
      </p>
    <div class="container">
      <div class="header">
        <h1 class="setupgame">PictoSwap</h1>
      </div>
      <div class="main">
        <Search class="setupgame"/>
      </div>
      <div class="footer">
        <button class="start" onClick = {()=>nav[1]()}>Start game!</button>
      </div>
    </div>
    </div>
  )
}

export default SetUpGameView;