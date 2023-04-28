import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import Comments from "../Comments";
import CommentsForm from "../CommentsForm";
import styled from "styled-components";

export default function ArtPieceDetails({piece, onToggleFavorite, onFormSubmit}){

  const {name, artist, year, genre, slug, isFavorite, imageSource: image} = piece;

  const commentsList = piece.commentsList;

  return (
    <div>
      <Image src={image} alt={name} width={300} height={300} aria-label="Image"/>
      <h2 aria-label="Name">{name}</h2>
      <h3 aria-label="Artist">{artist}</h3>
      <h3 aria-label="Year">{year}</h3>
      <h3 aria-label="Genre">{genre}</h3>
      <ColorsContainer>
        {piece.colors.map((color, index) => (
          <ColorCircle key={index} style={{backgroundColor: color}}/>
        ))}
      </ColorsContainer>
      <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} slug={slug}/>
      <CommentsForm onFormSubmit={onFormSubmit} slug={slug}/>
      <Comments commentsList={commentsList}/>
      <Link href="/art-pieces" aria-label="Pieces">Go Back</Link>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const ColorCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;