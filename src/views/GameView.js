const GameView = ({props, nav}) => {
  return (
    <div>
      <p>
        <button onClick = {()=>nav[0]()}>Quit</button>
      </p>
      <p>
        <button onClick = {()=>nav[1]()}>Continue</button>
      </p>
      <p>
        <button onClick = {()=>null}>Reset round</button>
      </p>
    </div>
  )
}

export default GameView;