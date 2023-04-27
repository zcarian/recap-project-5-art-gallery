
import { render, screen } from '@testing-library/react';
import SpotlightPreview from './index';

describe('SpotlightPreview', () => {
    it('renders the Art Piece image and artist', () => {
        const data = [
            {
                name: 'Art Piece 1',
                artist: 'Artist 1',
                imageSource: '/images/art-piece-1.jpg',
            },
            {
                name: 'Art Piece 2',
                artist: 'Artist 2',
                imageSource: '/images/art-piece-2.jpg',
            },
        ];

        render(<SpotlightPreview data={data} />);

        const artPieceImage = screen.getByAltText(/Art Piece/i);
        const artistName = screen.getByText(/Artist/i);

        expect(artPieceImage).toBeInTheDocument();
        expect(artistName).toBeInTheDocument();
    });
});


