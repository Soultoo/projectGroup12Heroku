import { Search } from "../presenters/search";

const SetUpGameView = ({props, nav}) => {
  return (
    <div>
      <p>
        <button class="back" onClick = {()=>nav[0]()}>Back</button>
      </p>
    <div class="container">
    <h1 class="setupgame">PictoSwap</h1>

      <Search class="setupgame"/>
      <p>
        <button class="start" onClick = {()=>nav[1]()}>Start game!</button>
      </p>
    </div>
    </div>
  )
}

export default SetUpGameView;