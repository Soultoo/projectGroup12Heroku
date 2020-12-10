const HomeScreenView = ({props, nav}) => {
  return (
    <div>
      <p>
        <button onClick = {()=>nav[0]()}>Start a game!</button>
      </p>
      <p>
        <button onClick = {()=>nav[1]()}>High Scores!</button>
      </p>
    </div>
  )
}

export default HomeScreenView;