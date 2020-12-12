const HomeScreenView = ({props, nav}) => {
  const boardSize = 3;
  const board = [...Array(boardSize).keys()]; 
  let counter = 1; 
  return (
    <div>
      <p>
        <button onClick = {()=>nav[0]()}>Start a game!</button>
      </p>
      <p>
        <button onClick = {()=>nav[1]()}>High Scores!</button>
      </p>
      <table>
        <tbody>
       
          {board.map(x=><tr>
            {board.map(x=><td>
              
              {counter++}
              </td>)}
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HomeScreenView;