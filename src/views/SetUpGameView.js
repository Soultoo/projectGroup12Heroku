



const SetUpGameView = ({nav, dispatch, searchAlbums, query, searchResults, setSearchQuery, promiseAction, setPhotoURL}) => {
  let q = "";

  return (
    <div>
      <p>
        <button class="back" onClick = {()=>nav[0]()}>Back</button>
      </p>
      
      <p>
        <button onClick = {()=>nav[1]()}>Start game!</button>
      </p>


      <form>
      <input onBlur={function(event) {setSearchQuery(event.target.value);}}>
        </input>
      </form>

        <div>
        <button onClick={()=>promiseAction(
          dispatch,
          searchAlbums(query), // FIXA
          "SETSEARCHRESULTS") // FIXA
          }>Search!
        
        </button>
        </div>


      <div id="search">

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
    </div>
  )
}

export default SetUpGameView;