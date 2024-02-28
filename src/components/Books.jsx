import { useState } from "react";
import { books } from "../constants/mockData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";

import styles from "./Books.module.css";

function Books() {
  console.log(books);
  const [like, setlike] = useState([]);
  const handleLikedList = (book, status) => {
    if (status) {
      const selecteditem = like.filter((i) => i.id !== book.id);
      setlike(selecteditem);
      // console.log(like);
    } else {
      setlike((like) => [...like, book]);
    }
    console.log(like);
  };

  return (
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
  );
}

export default Books;
