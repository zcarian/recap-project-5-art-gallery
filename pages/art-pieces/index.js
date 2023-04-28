import ArtPieces from '../../components/ArtPieces';

export default function PiecesPage({artPiecesInfo, onToggleFavorite,}) {
  
  
    return (
      <div>
        <ArtPieces 
        data={artPiecesInfo} 
        onToggleFavorite={onToggleFavorite} 
        />
      </div>
    );
  
}