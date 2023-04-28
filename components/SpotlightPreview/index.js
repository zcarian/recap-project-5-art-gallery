import Image from "next/image";
import ArtPiecePreview from "../ArtPiecePreview";
import { useEffect, useState } from "react";

// function getRandomElement(array) {
//     return array[Math.floor(Math.random() * array.length)];
// }


export default function SpotlightPreview({ data, onToggleFavorite}) {
    // const [spotlightPiece, setSpotlightPiece] = useState(null);
    
    // useEffect(() => {
    //     if (data) {
    //         const randomPiece = getRandomElement(data);
    //         setSpotlightPiece(randomPiece);
    //     }
    // }, []);

    // const findArt 
    function getRandomNumber(value){
        return Math.floor(Math.random() * value);
    }

    const randomId = getRandomNumber(data.length);
    const findArt =data[randomId];
    
    // console.log(data)
    // console.log("findArt: ",findArt);
    return (
        <div>
            {findArt && (
                <ArtPiecePreview
                    piece={findArt}
                    onToggleFavorite={onToggleFavorite}
                />
            )}
        </div>
    );    
}