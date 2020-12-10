// De här två skickar bara tillbaka det som ska synas

export const SearchResultsView=({searchResults, chosenAlbum})=>{
return (<div>
    <h2>Choose an album from Imgur</h2>
    { 
  searchResults.map(album=>
      <span key={album.id} class="albumResult" onClick={()=>chosenAlbum(album.id)}>
          <div class="album">
                <div>{album.title}</div>
          </div>
      </span>)
    } </div>);
}


export const SearchFormView=({ onSearch, onText }) =>{
    return (<div>
        <input type="text" onChange={event => onText(event.target.value)} placeholder="cats"></input>
        <button onClick={() => onSearch()}>Search!</button>
    </div>);


}


