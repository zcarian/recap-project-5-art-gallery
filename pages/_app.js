import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { useImmerLocalStorageState } from "../utils/useImmerLocalStorageState";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {

  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  // if(artPiecesInfo.length === 0){
  const { data, error, isLoading } = useSWR("https://example-apis.vercel.app/api/art", fetcher)

  // console.log(artPiecesInfo.length===0);

  useEffect(() => {
    if (data) {
      console.log("here");
      setArtPiecesInfo(
        data.map((artPiece) => {
          return { ...artPiece, isFavorite: false, commentsList: [] }
        })
      )
    }
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error...</div>
  }
  // }

  function handleToggleFavorite(slug) {
    setArtPiecesInfo(
      artPiecesInfo.map((artPiece) => {
        if (artPiece.slug === slug) {
          return { ...artPiece, isFavorite: !artPiece.isFavorite }
        }
        return artPiece;
      })
    )
  }

  // const handleFormSubmit2 = (comment) => {
  //   setCommentsList((prevList) => [
  //     { text: comment, time: new Date() },
  //     ...prevList,
  //   ]);
  // };

  function handleFormSubmit(slug, comment) {
    setArtPiecesInfo(
      artPiecesInfo.map((artPiece) => {
        if (artPiece.slug === slug) {
          return { ...artPiece, commentsList: [{ text: comment, time: new Date() }, ...artPiece.commentsList] }
        }
        return artPiece;
      })
    )
  }

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Component {...pageProps}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
        onFormSubmit={handleFormSubmit}
      />
    </>
  );
}
