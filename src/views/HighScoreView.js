const HighScoreView = ({props, nav}) => {
  return (
    <div>
      <p>
        <button onClick = {()=>nav[0]()}>Back</button>
      </p>
      <p>
        <button onClick = {()=>nav[1]()}>Continue</button>
      </p>
    </div>
  )
}

export default HighScoreView;