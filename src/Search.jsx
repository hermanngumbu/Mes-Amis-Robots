function Search(props) {
  return (
    <div className="Bloc-search">
      <input
        type="search"
        placeholder="Rechercher par nom"
        className="search"
        value={props.searchItem}
        onChange={(event) => {
          props.setSearchItem(event.target.value);
        }}
      />
    </div>
  );
}

export default Search;
