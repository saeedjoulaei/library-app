import { useState } from "react";

import { books as bookData } from "../constants/mockData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";
import SearchBox from "./SearchBox";

import styles from "./Books.module.css";

function Books() {
  const [books, setbooks] = useState(bookData);
  const [like, setlike] = useState([]);
  const [search, setsearch] = useState("");

  const searchHandler = () => {
    if (search) {
      const newbooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
      setbooks(newbooks);
    } else setbooks(bookData);
  };

  const handleLikedList = (book, status) => {
    if (status) {
      const selecteditem = like.filter((i) => i.id !== book.id);
      setlike(selecteditem);
    } else {
      setlike((like) => [...like, book]);
    }
  };

  return (
    <>
      <SearchBox
        search={search}
        setsearch={setsearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              handleLikedList={handleLikedList}
            />
          ))}
        </div>
        <div>
          {!!like.length && (
            <div className={styles.favorite}>
              <h4>Favorites</h4>
              {like.map((book) => (
                <SideCard key={book.id} data={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Books;
