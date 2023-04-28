// import DeleteCommentButton from "../DeleteCommentButton";

export default function Comments({ commentsList,
    //  onCommentDelete, 
    //  slug
    }) {

    return (
        <ul>
            {commentsList.map((comment, index) => (
                <li key={index}>
                    <p>{comment.text}</p>
                    {comment.time && <p>{comment.time.toLocaleString()}</p>}
                    {/* <DeleteCommentButton onCommentDelete={onCommentDelete} slug={slug} comment={commentsList[index]}/> */}
                </li>
            ))}
        </ul>
    );
}