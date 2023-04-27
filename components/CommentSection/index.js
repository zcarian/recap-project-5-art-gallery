import { useState } from "react";

export default function CommentSection() {
    const [comment, setComment] = useState("");
    const [commentsList, setCommentsList] = useState([]);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (comment) {
            setCommentsList((prevList) => [
                { text: comment, time: new Date() }, ...prevList,
            ]);
            setComment("");
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <h1>Comments</h1>
                <label htmlFor="comment">Comment:</label>
                <input
                    // aria-label="text"
                    // type="text"
                    // id="comment"
                    value={comment}
                    onChange={handleCommentChange}
                    required
                />
                <button type="submit">Send</button>
            </form>

            <ul>
                {commentsList.map((comment, index) => (
                    <li key={index}>
                        <p>{comment.text}</p>
                        <p>{comment.time.toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
