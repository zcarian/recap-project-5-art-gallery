import ArtPieces from "../../components/ArtPieces";

export default function FavoritesPage({artPiecesInfo, onToggleFavorite}) {
    
    console.log("artPiecesInfo: ",artPiecesInfo);

    const favoriteArtPieces = artPiecesInfo.filter((artPiece) => artPiece.isFavorite);

    console.log("favoriteArtPieces: ",favoriteArtPieces);

    return (
        <div>
            <ArtPieces data={favoriteArtPieces} onToggleFavorite={onToggleFavorite}/>
        </div>
    )
}