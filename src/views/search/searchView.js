// De här två skickar bara tillbaka det som ska synas

export const SearchResultsView=({searchResults})=>{
return (<div>{ 
  searchResults.map(album=>
      <span key={album.id} class="searchResult">
          <div class="searchtitle">
              {album.title}
          </div>
      </span>)
    } </div>);
}


export const SearchFormView=({ onSearch, onText }) =>{
    return (<div>
        <input type="text" onChange={event => onText(event.target.value)}></input>
        <button onClick={() => onSearch()}>Search!</button>
    </div>);
    }
