export default function DeleteCommentButton({ onCommentDelete, slug, comment}) {

console.log(comment)
    return (
        <button onClick={()=>onCommentDelete(slug, "test")}>❌</button>
    );
}