export default function Filter(props) {
  return (
    <div>
      filter shown with
      <input
        type="search"
        value={props.searchInput}
        onChange={(e) => {
          props.setSearchInput(e.target.value);
        }}
      />
    </div>
  );
}
