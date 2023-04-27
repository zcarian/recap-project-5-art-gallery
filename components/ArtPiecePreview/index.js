import Image from "next/image"

export default function ArtPiecePreview({image, name, artist}) {
    return (
        <div>
           <Image src={image} alt={name} width={300} height={300} /> 
            <h2 aria-label="Name">{name}</h2>
            <h3 aria-label="Artist">{artist}</h3>
        </div>
    )
}