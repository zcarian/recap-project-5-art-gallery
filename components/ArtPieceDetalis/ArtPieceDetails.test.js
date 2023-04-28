import ArtPieceDetails from ".";
import FavoritesPage from "../../pages/favorites";
import { render, screen } from "@testing-library/react";


const mockData = [
    {
        name: 'Art Piece 1',
        slug: 'art-piece-1',
        imageSource: 'https://picsum.photos/200/300',
        artist: 'Artist',
        year: '1',
        genre: 'Genre',
        isFavorite: false,
    },
];

test("ArtPieceDetails component displays the name, artist, year, genre and image of the art piece", () => {

    const onToggleFavorite = jest.fn();

    render(<ArtPieceDetails piece={mockData} onToggleFavorite={onToggleFavorite}/>);
    const image = screen.getByLabelText(/image/i);
    expect(image).toBeInTheDocument();
    

    const name = screen.getByLabelText(/name/i);
    expect(name).toBeInTheDocument();

    const artist = screen.getByLabelText(/artist/i);
    expect(artist).toBeInTheDocument();
    
    const year = screen.getByLabelText(/year/i);
    expect(year).toBeInTheDocument();

    const genre = screen.getByLabelText(/genre/i);
    expect(genre).toBeInTheDocument();

    const favoriteButton = screen.getByLabelText(/favorite-button/i);
    expect(favoriteButton).toBeInTheDocument();
});

test('Clicking the favorite-button on a non-favorite piece saves it as a favorite',()=>{
    const onToggleFavorite = jest.fn();
    render(<ArtPieceDetails piece={mockData} onToggleFavorite={onToggleFavorite}/>);
    const favoriteButton = screen.getByLabelText(/favorite-button/i);
    favoriteButton.click();
    expect(onToggleFavorite).toBeCalledTimes(1);
})