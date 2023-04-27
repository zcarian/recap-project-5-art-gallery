export default function FavoriteButton({isFavorite, onToggleFavorite, slug}) {
    return ( 
        <button onClick={()=>onToggleFavorite(slug)}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
    )
}