



const SetUpGameView = ({nav, dispatch, searchAlbums, query, searchResults, setSearchQuery, promiseAction, setPhotoURL}) => {
  let q = "";

  return (
    <div>
      <button class="back" onClick = {()=>nav[0]()}>Back</button>
      <div class="container">
        <div class="header">
          <h1 class="setupgame">PictoSwap</h1>
        </div>
      
        <div class="search searchgrid">
          <div class="searchmain">
            <form >
              <input class="search" onBlur={function(event) {setSearchQuery(event.target.value);}} placeholder={"Example: Cats"}>
                </input>
            </form>
          </div>

          <div class="searchright">
            <button onClick={()=>promiseAction(
              dispatch,
              searchAlbums(query), // FIXA
              "SETSEARCHRESULTS") // FIXA
              }>Search!</button>
          </div>


          <div class="album searchbulk">

            { // Måste förhindra att man väljer videor
                searchResults.filter(x=>(
                  x.images && 
                  !(x.images[0].animated) && 
                  !(x.images[0].height > x.images[0].width
                    )) ? true : false).map(x=><img 
                    src={x.images[0].link}
                    alt="wow"
                    width="100px"
                    onClick={()=>setPhotoURL(x.images[0].link)}
                    style={{cursor:"pointer"}}
                    ></img>)
              }
          </div>
          
        </div>
        <div class="footer">
          
          <button class="start" onClick = {()=>nav[1]()}>Start game!</button>
        
        </div>
      </div>
    </div>
  )
}

export default SetUpGameView;