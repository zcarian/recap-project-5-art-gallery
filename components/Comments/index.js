export default function Comments({ commentsList }) {
    return (
        <ul>
            {commentsList.map((comment, index) => (
                <li key={index}>
                    <p>{comment.text}</p>
                    {comment.time && <p>{comment.time.toLocaleString()}</p>}
                </li>
            ))}
        </ul>
    );
}