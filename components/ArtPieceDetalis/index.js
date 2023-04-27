import Image from "next/image";
import Link from "next/link";
import CommentSection from "../CommentSection"

export default function ArtPieceDetails({ image, name, artist, year, genre, }) {

  return (
    <div>
      <Image src={image} alt={name} width={300} height={300} aria-label="Image" />
      <h2 aria-label="Name">{name}</h2>
      <h3 aria-label="Artist">{artist}</h3>
      <h3 aria-label="Year">{year}</h3>
      <h3 aria-label="Genre">{genre}</h3>

      <CommentSection />

      <Link href="/art-pieces" aria-label="Pieces">Go Back</Link>
    </div>
  );
}


