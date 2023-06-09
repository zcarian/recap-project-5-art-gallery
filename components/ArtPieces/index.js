import ArtPiecePreview from "../ArtPiecePreview"
import Link from "next/link"

export default function ArtPieces({data, onToggleFavorite}) {
    return (
        <ul>
            {data.map((piece)=>{
                return (<li key={piece.slug}>
                            <ArtPiecePreview piece={piece} onToggleFavorite={onToggleFavorite}/>                            
                        </li>)
            })}
        </ul>
    )
}