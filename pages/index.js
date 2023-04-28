import SpotlightPreview from "../components/SpotlightPreview";

export default function SpotlightPage({onToggleFavorite, artPiecesInfo }) {
  return (
    <div>
      <h1>Spotlight</h1>
      <SpotlightPreview onToggleFavorite={onToggleFavorite} data={artPiecesInfo} />
    </div>
  );
}