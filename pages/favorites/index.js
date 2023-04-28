import ArtPieces from "../../components/ArtPieces";

export default function FavoritesPage({artPiecesInfo, onToggleFavorite}) {
    
    const favoriteArtPieces = artPiecesInfo.filter((artPiece) => artPiece.isFavorite);

    return (
        <div>
            <ArtPieces data={favoriteArtPieces} onToggleFavorite={onToggleFavorite}/>
        </div>
    )
}