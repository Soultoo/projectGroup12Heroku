import Board from "../presenters/board";

const GameView = ({props, nav}) => {
  return (<div>
            <button class="back" onClick = {()=>nav[0]()}>Back</button>
              <div class="container gamecont">
                <div class="header">
                  <h1 class="setupgame">PictoSwap</h1>
                </div>
                <div class="nav">
                    <button onClick = {()=>nav[1]()}>High Scores</button>                  
              </div>
              <div class="game">
                <Board nav={()=>nav[1]()}/>
              </div>
            </div>
    </div>
  )
}

export default GameView;