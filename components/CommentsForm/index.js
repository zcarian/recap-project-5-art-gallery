import { useState } from "react";

export default function CommentForm({ onFormSubmit, slug }) {
    const [comment, setComment] = useState("");

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment) {
            onFormSubmit(slug, comment);
            setComment("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Comments</h2>
            <label htmlFor="comment">Comment:</label>
            <input
                aria-label="text"
                type="text"
                id="comment"
                value={comment}
                onChange={handleCommentChange}
                required
            />
            <button type="submit">Send</button>
        </form>
    );
}