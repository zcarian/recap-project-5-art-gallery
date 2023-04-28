export default function FavoriteButton({isFavorite, onToggleFavorite, slug}) {
    return ( 
        <button onClick={()=>onToggleFavorite(slug)} aria-label="Favorite-button">
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
    )
}