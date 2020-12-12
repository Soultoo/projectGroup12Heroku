const HighScoreView = ({props, nav, scores, addScore}) => {
  return (
    <div>
      <p>
        <button onClick = {()=>nav[0]()}>Back</button>
      </p>
      <div class="container">
        <p>
          <button onClick = {()=>nav[1]()}>Continue</button>
        </p>
          <div> 
            <table>
              <tbody>
                {scores && scores.map(scoreElement => (
                <tr key={scoreElement.id}>
                  <td>{scoreElement.name}</td><td>{scoreElement.score}</td>
                </tr>
                ))}
              </tbody>
            </table> {// Här ska stuff vara sen}
            }
          <button onClick = {()=>addScore()}>:)</button>
        </div>
      </div>
    </div>
    
  )
}

export default HighScoreView;