
export default function SearchFormView({ onSearch, onText }) {
    return (<div>
        <input type="text" onChange={event => onText(event.target.value)}></input>
        <button onClick={() => onSearch()}>Search!</button>
    </div>);
}