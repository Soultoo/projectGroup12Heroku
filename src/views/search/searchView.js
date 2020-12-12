// De här två skickar bara tillbaka det som ska synas
import './search.css';

export const SearchResultsView=({searchResults, chosenAlbum, imageTrigger})=>{
return (<div>
    <select class="searchSelect" name="types" id="types" onChange={(event)=>{chosenAlbum(event.target.value)}, (event)=>imageTrigger(event.target.value)}>
        <option class ="searchOption" value={""}> Choose an album: </option>
        {searchResults.map(album =><option class ="searchOption" key={album.id} value={album.id}>{album.title}</option>)}
    </select>
     </div>);
}


export const SearchFormView=({ onSearch, onText }) =>{
    return (<div class="searchInput">
        <input class="search" type="text" onChange={event => onText(event.target.value)} placeholder="Example: Cats"></input>
        <button class="search" onClick={() => onSearch()}>Search!</button>
    </div>);


}


