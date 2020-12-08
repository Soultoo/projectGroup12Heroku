export default function SearchResultsView( {searchResults} ) {
    <div>
        {searchResults.map(item =>
            <span onClick={() => console.log(item.id)} key={item.id} class="searchResult">
                <div class="searchtitle">
                    {item.title}
                </div>
            </span>)
        } </div>
}

/*<img src={https://spoonacular.com/recipeImages/${dish.image}}
                    height="100" ></img>*/ 