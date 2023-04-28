import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";
import useSWR from "swr";
import { useEffect } from "react";
import { useImmerLocalStorageState } from "../utils/useImmerLocalStorageState";
import { uid } from "uid";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {

  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
    );  
    
  const {data , error, isLoading} = useSWR("https://example-apis.vercel.app/api/art", fetcher)
  
  useEffect(() => {
    if(data && artPiecesInfo.length === 0){
      console.log("here");
      setArtPiecesInfo(
        data.map((artPiece) => {
          return {...artPiece, isFavorite: false, commentsList: []}
        })
      )
    }
  },[artPiecesInfo])

  function handleToggleFavorite(slug){
    setArtPiecesInfo(
      artPiecesInfo.map((artPiece) => {
        if(artPiece.slug === slug){
          return {...artPiece, isFavorite: !artPiece.isFavorite}
        }
        return artPiece;
      })
    )
  }

  function handleFormSubmit(slug, comment) {
    setArtPiecesInfo(
      artPiecesInfo.map((artPiece) => {
        if(artPiece.slug === slug){
          return {...artPiece, commentsList: [ {text: comment, time: new Date(), id: uid()}, ...artPiece.commentsList]}
        }
        return artPiece;
      })
    )
  }
  
  // function handleCommentDelete(slug , commentId){
  //   console.log("slug:",slug );
  //   console.log("commentId:",commentId );
  //   setArtPiecesInfo(
  //     artPiecesInfo.map((artPiece) => {
  //       if(artPiece.slug === slug){
  //         return {...artPiece, commentsList: artPiece.commentsList.filter((comment) => comment.id !== commentId)}
  //       }
  //       return artPiece;
  //     })
  //   )
  // }

  if(isLoading){
    return <div>Loading...</div>
  }
  
  if(error){
    return <div>Error...</div>
  }

  return (
    <>
      <GlobalStyle />
        <Navigation />
        <Component {...pageProps} 
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
        onFormSubmit={handleFormSubmit}
        // onCommentDelete={handleCommentDelete}
        />
    </>
    );
}
