const SetUpGameView = ({props, nav}) => {
  return (
    <div>
      <p>
        <button onClick = {()=>nav[0]()}>Back</button>
      </p>
      <p>
        <button onClick = {()=>nav[1]()}>Start game!</button>
      </p>
    </div>
  )
}

export default SetUpGameView;