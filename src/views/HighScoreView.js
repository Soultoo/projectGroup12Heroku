import loading from '../img/loading.gif';


const compareFunc = (a,b) => {
    const diffComp = -a.difficulty.localeCompare(b.difficulty);
    if (diffComp!==0){
      return diffComp
    }
    const compared = a.score -b.score;
  return compared;
  }



const HighScoreView = ({props, nav, scores}) => {
  return (
    <div>
       <p>
        <button class="back" onClick = {()=>nav[0]()}>Back</button>
      </p>    
      <div class="container">
      
      <h1 class="highscore">PictoSwap</h1>
        <div class="highscore-container">
          <div class="highscore hs-button" >
            <button class="highscore" onClick = {()=>nav[1]()}>New Game!</button>
          </div>
          
              <div class="highscore-header">
                <h3 class="highscore">High Scores</h3>
              </div>
              <div class="highscore-list"> 
              <table class="highscore">
                <tbody class="highscore">
                  <tr class="highscore">
                    <th class="highscore position"></th>
                  <th class="highscore name">Name: </th>
                  <th class="highscore difficulty">Difficulty: </th>
                  <th class="highscore time">Number of moves:</th>
                  </tr>
                  
                  {!scores && <img src={loading} width="100px"></img> 
                  ||
                  scores && scores.sort(compareFunc).map((scoreElement, index) => (
                  <tr class="highscore" key={scoreElement.id}>
                    <td class="highscore position">{index+1}</td>
                    <td class="highscore name">{scoreElement.name}</td>
                    <td class="highscore difficulty">{(scoreElement.difficulty==="3")?"Easy"
                    :(scoreElement.difficulty==="4")?"Normal"
                    :(scoreElement.difficulty==="5")?"Hard"
                    :""}</td>
                    <td class="highscore time" >{scoreElement.score}</td>
                  </tr>
                  ))}
                </tbody>
              </table> {// Här ska stuff vara sen}
              }
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default HighScoreView;