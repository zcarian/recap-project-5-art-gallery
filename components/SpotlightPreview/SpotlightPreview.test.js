
import { render, screen } from '@testing-library/react';
import SpotlightPreview from './index';

const mockData = [
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

describe('SpotlightPreview', () => {
    it('renders the Art Piece image and artist', () => {

        render(<SpotlightPreview data={mockData} />);

        const artPieceImage = screen.getByAltText(/Art Piece/i);
        const artistName = screen.getByText(/Artist/i);

        expect(artPieceImage).toBeInTheDocument();
        expect(artistName).toBeInTheDocument();
    });
});


test('The favorite-button is displayed in the spotlight view ',() => {
    render(<SpotlightPreview data={mockData} />);
    const favoriteButton = screen.getByRole('button');
    expect(favoriteButton).toBeInTheDocument();
})