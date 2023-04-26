import ArtPiecePreview from "../ArtPiecePreview"

export default function ArtPieces({data}) {
    return (
        <ul>
            {data.map((piece)=>{
                return <li key={piece.slug}>
                    <ArtPiecePreview 
                        name={piece.name} 
                        image={piece.imageSource} 
                        artist={piece.artist}/>
                </li>
            })}
        </ul>
    )
}