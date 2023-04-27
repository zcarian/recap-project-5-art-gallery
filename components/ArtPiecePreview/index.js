import Image from "next/image"
import FavoriteButton from "../FavoriteButton"

export default function ArtPiecePreview({piece, onToggleFavorite}) {
    const {name, imageSource: image, artist, slug, isFavorite} = piece;
    return (
        <div>
           <Image src={image} alt={name} width={300} height={300} /> 
            <h2 aria-label="Name">{name}</h2>
            <h3 aria-label="Artist">{artist}</h3>
            <FavoriteButton onToggleFavorite={onToggleFavorite} slug={slug} isFavorite={isFavorite}/> 
        </div>
    )
}