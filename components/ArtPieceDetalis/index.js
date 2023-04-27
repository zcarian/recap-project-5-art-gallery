import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({image, name, artist, year, genre,}){
    return (
      <div>
        <Image src={image} alt={name} width={300} height={300} />
        <h2>{name}</h2>
        <h3>{artist}</h3>
        <h3>{year}</h3>
        <h3>{genre}</h3>
        <Link href="/art-pieces">Go Back</Link>
      </div>
    );
}