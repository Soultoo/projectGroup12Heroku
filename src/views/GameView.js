import Board from "../presenters/board";

const GameView = ({props, nav}) => {
  return (
    <div class="container">
      <p>
        <button onClick = {()=>nav[0]()}>Quit</button>
      </p>
      <p>
        <button onClick = {()=>nav[1]()}>Continue</button>
      </p>
      <Board/>
      <p>
        <button onClick = {()=>null}>Reset round</button>
      </p>
    </div>
  )
}

export default GameView;