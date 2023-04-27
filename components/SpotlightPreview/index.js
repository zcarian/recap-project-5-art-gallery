import Image from "next/image";
import ArtPiecePreview from "../ArtPiecePreview";
import { useEffect, useState } from "react";

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export default function SpotlightPreview({ data }) {
    const [spotlightPiece, setSpotlightPiece] = useState(null);

    useEffect(() => {
        if (data) {
            const randomPiece = getRandomElement(data);
            setSpotlightPiece(randomPiece);
        }
    }, [data]);

    return (
        <div>
            {spotlightPiece && (
                <ArtPiecePreview
                    image={spotlightPiece.imageSource}
                    name={spotlightPiece.name}
                    artist={spotlightPiece.artist}
                />
            )}
        </div>
    );
}