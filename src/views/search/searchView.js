// De här två skickar bara tillbaka det som ska synas

export const SearchResultsView=({searchResults})=>{
return (<div>{ 
  searchResults.map(dish=>
      <span key={dish.id} class="searchResult">
          <div class="searchtitle">
              {dish.title}
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
