import { useRouter } from 'next/router'
import ArtPieceDetails from '../../components/ArtPieceDetalis'

export default function PieceDeteiled({data}){
    const route = useRouter();
    const { slug } = route.query;
    const piece = data.find((ele)=>ele.slug === slug);

    const {name, artist, year, genre, imageSource} = piece;

    return (
        <ArtPieceDetails 
            name={name} 
            artist={artist} 
            year={year} 
            genre={genre} 
            image={imageSource}
        />
    )
}