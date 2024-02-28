import { IoSearchSharp } from "react-icons/io5";

function SearchBox({ search, setsearch, searchHandler }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <button onClick={searchHandler}>
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default SearchBox;
