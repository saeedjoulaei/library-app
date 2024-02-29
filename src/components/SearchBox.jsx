import { IoSearchSharp } from "react-icons/io5";

import styles from "./SearchBox.module.css";

function SearchBox({ search, setsearch, searchHandler }) {
  return (
    <div className={styles.search}>
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
