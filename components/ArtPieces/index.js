import ArtPiecePreview from "../ArtPiecePreview"
import Link from "next/link"

export default function ArtPieces({data}) {
    return (
        <ul>
            {data.map((piece)=>{
                return (<li key={piece.slug}>
                          <Link href={`art-pieces/${piece.slug}`}>
                             <ArtPiecePreview name={piece.name} image={piece.imageSource} artist={piece.artist}/>                            
                          </Link>
                        </li>)
            })}
        </ul>
    )
}