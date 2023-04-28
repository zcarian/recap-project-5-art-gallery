import Image from "next/image"
import FavoriteButton from "../FavoriteButton"
import Link from "next/link";

export default function ArtPiecePreview({piece, onToggleFavorite}) {
    const {name, imageSource: image, artist, slug, isFavorite} = piece;
    // console.log("Piece in ArtPiecePreview", piece)
    return (
        <div>
            <Link href={`/art-pieces/${slug}`}>
                <Image src={image} alt={name} width={300} height={300} /> 
                <h2 aria-label="Name">{name}</h2>
                <h3 aria-label="Artist">{artist}</h3>
            </Link>
            <FavoriteButton onToggleFavorite={onToggleFavorite} slug={slug} isFavorite={isFavorite}/> 
        </div>
    )
}