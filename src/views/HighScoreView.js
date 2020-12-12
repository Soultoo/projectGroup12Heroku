const HighScoreView = ({props, nav, scores, addScore}) => {
  return (
    <div>
      <p>
        <button onClick = {()=>nav[0]()}>Back</button>
      </p>
      
      <h1 class="highscore">PictoSwap</h1>
      <div class="container">
        <div class="highscore-container">
          <p>
            <button class="highscore" onClick = {()=>nav[1]()}>Continue</button>
          </p>
          <h2>High Scores</h2>
            <div class="highscore-list"> 
              <table class="highscore">
                <tbody class="highscore">
                  <tr class="highscore">
                  <th class="highscore">Name: </th>
                  <th class="highscore">Time:</th>
                  </tr>
                  
                  {scores && scores.map(scoreElement => (
                  <tr class="highscore" key={scoreElement.id}>
                    <td class="highscore">{scoreElement.name}</td><td>{scoreElement.score}</td>
                  </tr>
                  ))}
                </tbody>
              </table> {// Här ska stuff vara sen}
              }
            <button class="highscore" onClick = {()=>addScore()}>:)</button>
            </div>
          </div>
      </div>
    </div>
    
  )
}

export default HighScoreView;