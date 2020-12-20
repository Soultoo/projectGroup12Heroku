
import SearchBarContainer from "../presenters/SearchBarContainer";
import loading from '../img/loading.gif';

const SetUpGameView = ({
  nav, 
  dispatch, 
  searchAlbums, 
  query, 
  searchResults, 
  setSearchQuery, 
  promiseAction, 
  setPhotoURL, 
  photoURL, 
  difficulty, 
  setDifficulty}) => {


  return (
    <div>
      <button class="back" onClick = {()=>nav[0]()}>Back</button>
      <div class="container">
        <div class="header">
          <h1 class="setupgame">PictoSwap</h1>
        </div>
          
            <label for="easy">Easy (3x3)</label>
            <input type="radio" id="easy" name="diff" value="3" checked={(difficulty==3)} onChange={(event) => setDifficulty(parseInt(event.target.value))} ></input>
          
            <label for="medium">Medium (4x4)</label>
            <input type="radio" id="medium" name="diff" checked={(difficulty==4)} value="4" onChange={(event) => setDifficulty(parseInt(event.target.value)) } ></input>
         
            <label for="hard">Hard (5x5)</label>
            <input type="radio" id="hard" name="diff" value="5" checked={(difficulty==5)} onChange={(event) => setDifficulty(parseInt(event.target.value))}></input>
              

        <div class="search searchgrid">
          <div class="searchmain">
            <SearchBarContainer/>
          </div>

          <div class="searchright">
            <button key="triggerSearch" onClick={()=>promiseAction(
              dispatch,
              searchAlbums(query), // FIXA
              "SETSEARCHRESULTS") // FIXA
              }>Search!</button>
          </div>

          <div key="fancyAlbum" class="album searchbulk">
            
            { // Måste förhindra att man väljer videor
                (!searchResults) && <img src={loading} width="100px"></img>
                || 
        
                
                  searchResults.filter(x=>(
                    x.images && 
                    !(x.images[0].animated) && 
                    !(x.images[0].height > x.images[0].width
                      ) &&
                      !(x.images[0].height>800)) ? true : false).map(x=><img 
                      src={x.images[0].link}
                      alt="wow"
                      width="100px"
                      onClick={()=>setPhotoURL(x.images[0].link)}
                      style={{cursor:"pointer",background:"url(https://source.unsplash.com/random/1000x1000)"}}
                      ></img>)
              }
          </div>
          
        </div>
        
        <div class="footer">
        <div class="uglysolution">
        <span>
          {(photoURL)? <span>You have chosen: {<img src={photoURL} width="100px" class="album" />}</span>:""}
        </span>
      </div>
          <button class="start" onClick = {()=>nav[1]()}>Start game!</button>
        
        </div>
      </div>
    </div>
  )
}

export default SetUpGameView;

/*
<form key="difficultyChoices" class="difficulty" onChange={(event)=>setDifficulty(event.target.value)}>
            <label for="easy">Easy (4x4)</label>
            <input type="radio" id="easy" value="4" ></input>
            <label for="medium">Medium (5x5)</label>
            <input type="radio" id="medium" value="5"></input>
            <label for="hard">Hard (6x6)</label>
            <input type="radio" id="hard" value="6"></input>
                    </form>
 
 */