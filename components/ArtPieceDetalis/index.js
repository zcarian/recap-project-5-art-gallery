import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function ArtPieceDetails({ image, name, artist, year, genre, }) {

  /*---------------------------------------------------------
  v v v Comment section v v v
  ---------------------------------------------------------*/

  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      setCommentsList((prevList) => [...prevList, { text: comment, time: new Date() }]);
      setComment("");
    }
  };

  /*---------------------------------------------------------
  ^ ^ ^ Comment section  ^ ^ ^
  ---------------------------------------------------------*/

  return (
    <div>
      <Image src={image} alt={name} width={300} height={300} aria-label="Image" />
      <h2 aria-label="Name">{name}</h2>
      <h3 aria-label="Artist">{artist}</h3>
      <h3 aria-label="Year">{year}</h3>
      <h3 aria-label="Genre">{genre}</h3>


      {<form onSubmit={handleFormSubmit}>
        <h1>Comments</h1>
        <label htmlFor="comment">Comment:</label>
        <input
          type="text"
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          required
        />
        <button type="submit">Send</button>
      </form>}

      <ul>
        {commentsList.map((comment, index) => (
          <li key={index}>
            <p>{comment.text}</p>
            <p>{comment.time.toLocaleString()}</p>
          </li>
        ))}
      </ul>

      <Link href="/art-pieces" aria-label="Pieces">Go Back</Link>
    </div>
  );
}


