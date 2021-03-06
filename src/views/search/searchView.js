// De här två skickar bara tillbaka det som ska synas

export const SearchResultsView=({searchResults, chosenAlbum})=>{
return (<div>
    <select class="searchSelect" name="types" id="types" onChange={(event)=>{chosenAlbum(event.target.value)}}>
        <option class ="searchOption" value={""}> Choose an album: </option>
        {searchResults.map(album =><option class ="searchOption" key={album.id} value={album.id}>{album.title}</option>)}
    </select>
     </div>);
}


export const SearchFormView=({ onSearch, onText }) =>{
    return (<div class="search searchgrid">
                <div class="searchheader">
                    <h3 class="search">Search for an album and image</h3>
                </div>
                <div class="searchmain">
                    <input class="search" type="text" onChange={event => onText(event.target.value)} placeholder="Example: Cats"></input>
                </div>
                <div class="searchright">
                    <button class="search" onClick={() => onSearch()}>Search!</button>
                </div>
    </div>);


}


