import ArtPieces from '../../components/ArtPieces';

export default function PiecesPage({artPiecesInfo, onToggleFavorite, onFormSubmit}) {
  
  
    return (
      <div>
        <ArtPieces data={artPiecesInfo} onToggleFavorite={onToggleFavorite} onFormSubmit={onFormSubmit}/>
      </div>
    );
  
}