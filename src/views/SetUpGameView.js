import { Search } from "../presenters/search";

const SetUpGameView = ({props, nav}) => {
  return (
    <div class="container">
      <p>
        <button class="back" onClick = {()=>nav[0]()}>Back</button>
      </p>
      <Search/>
      <p>
        <button class="start" onClick = {()=>nav[1]()}>Start game!</button>
      </p>
    </div>
  )
}

export default SetUpGameView;