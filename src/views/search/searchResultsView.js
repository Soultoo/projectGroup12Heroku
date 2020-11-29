export default function SearchResultsView({ searchResults }) {
    <div>
        {searchResults.map(image =>
            <span onClick={() => console.log(image.id)} key={image.id} class="searchResult">
                <div class="searchtitle">
                    {image.title}
                </div>
            </span>)
        } </div>
}

/*<img src={https://spoonacular.com/recipeImages/${dish.image}}
                    height="100" ></img>*/ 