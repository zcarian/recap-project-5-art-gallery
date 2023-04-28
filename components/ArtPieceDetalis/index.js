import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import Comments from "../Comments";
import CommentsForm from "../CommentsForm";

export default function ArtPieceDetails({piece, onToggleFavorite, onFormSubmit}){

  const {name, artist, year, genre, slug, isFavorite, imageSource: image} = piece;

  const commentsList = piece.commentsList;

  return (
    <div>
      <Image src={image} alt={name} width={300} height={300} aria-label="Image"/>
      <h2 aria-label="Name">{name}</h2>
      <h3 aria-label="Artist">{artist}</h3>
      <h3 aria-label="Year">{year}</h3>
      <h3 aria-label="Genre">{genre}</h3>
      <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} slug={slug}/>
      <CommentsForm onFormSubmit={onFormSubmit} slug={slug}/>
      <Comments commentsList={commentsList}/>
      <Link href="/art-pieces" aria-label="Pieces">Go Back</Link>
    </div>
  );
}