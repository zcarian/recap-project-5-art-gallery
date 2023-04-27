import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";
import useSWR from "swr";
import { useState ,useEffect } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {

  const {data , error, isLoading} = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  

  function handleToggleFavorite(slug){
    setArtPiecesInfo(
      artPiecesInfo.map((artPiece) => {
        if(artPiece.slug === slug){
          return {...artPiece, isFavorite: !artPiece.isFavorite}
        }
        return artPiece;
      })
    )
    console.log("slug: ",slug);
  }

  useEffect(() => {
    if(data){
      setArtPiecesInfo(
        data.map((artPiece) => {
          return {...artPiece, isFavorite: false}
        })
      )
    }},[data])
  
  if(isLoading){
    return <div>Loading...</div>
  }
  
  if(error){
    return <div>Error...</div>
  }
  
  if(data){
    // console.log("data: ",data);
    // console.log("ArtPieceInfo",artPiecesInfo);
    return (
      <>
        <GlobalStyle />
          <Navigation />
          <Component {...pageProps} 
          // data={data}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavorite}
          />
      </>
    );
  }
}
