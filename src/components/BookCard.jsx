import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

function BookCard({ data: { title, author, image, language, pages } }) {
  const [like, setLike] = useState(false);
  const clickHandler = () => {
    setLike((like) => !like);
  };

  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button onClick={clickHandler}>
        <AiFillHeart
          style={{ color: like ? "red" : "#e0e0e0", fontSize: "1.8rem" }}
        />
      </button>
    </div>
  );
}

export default BookCard;
