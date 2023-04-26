import Image from "next/image"

export default function ArtPiecePreview({image, name, artist}) {
    return (
        <div>
           <Image src={image} alt={name} width={300} height={300} /> 
            <h2>{name}</h2>
            <h3>{artist}</h3>
        </div>
    )
}