import { useRouter } from 'next/router'
import ArtPieceDetails from '../../components/ArtPieceDetalis'

export default function PieceDeteiled({
    artPiecesInfo, 
    onToggleFavorite,
    onFormSubmit, 
    // onCommentDelete
}){

    const route = useRouter();
    const { slug } = route.query;
    const piece = artPiecesInfo.find((ele)=>ele.slug === slug);

    return (
        <ArtPieceDetails 
            piece = {piece}
            onToggleFavorite={onToggleFavorite}
            onFormSubmit={onFormSubmit}
            // onCommentDelete={onCommentDelete}
        />
    )
}