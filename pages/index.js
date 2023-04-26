import useSWR from 'swr';
import ArtPieces from '../components/ArtPieces';

export default function PiecesPage() {
  const {data , error, isLoading} = useSWR("https://example-apis.vercel.app/api/art");
  
  if(data){
    console.log(data);
    return (
      <div>
        <ArtPieces pieces={data}/>
      </div>
    );
  }
}