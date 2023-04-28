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
        colors: ['#ffffff', '#000000'],
        isFavorite: false,
        commentsList: []
    },
];

test("ArtPieceDetails component displays the name, artist, year, genre and image of the art piece", () => {

    const onToggleFavorite = jest.fn();
    const onFormSubmit = jest.fn();

    render(<ArtPieceDetails piece={mockData[0]} onToggleFavorite={onToggleFavorite} onFormSubmit={onFormSubmit} />);
    const image = screen.getByLabelText(/Image/i);
    expect(image).toBeInTheDocument();


    const name = screen.getByLabelText(/Name/i);
    expect(name).toBeInTheDocument();

    const artist = screen.getByLabelText(/Artist/i);
    expect(artist).toBeInTheDocument();

    const year = screen.getByLabelText(/Year/i);
    expect(year).toBeInTheDocument();

    const genre = screen.getByLabelText(/Genre/i);
    expect(genre).toBeInTheDocument();

    const favoriteButton = screen.getByLabelText(/favorite-button/i);
    expect(favoriteButton).toBeInTheDocument();
});

test('Clicking the favorite-button on a non-favorite piece saves it as a favorite', () => {
    const onToggleFavorite = jest.fn();
    render(<ArtPieceDetails piece={mockData[0]} onToggleFavorite={onToggleFavorite} />);
    const favoriteButton = screen.getByLabelText(/favorite-button/i);
    favoriteButton.click();
    expect(onToggleFavorite).toHaveBeenCalledTimes(1);
})

test("ArtPieceDetails component displays the colors of the art piece", () => {
    const onToggleFavorite = jest.fn();
    const onFormSubmit = jest.fn();

    render(<ArtPieceDetails piece={mockData[0]} onToggleFavorite={onToggleFavorite} onFormSubmit={onFormSubmit} />);

    const colorCircles = screen.getAllByTestId("color-circle");
    expect(colorCircles).toHaveLength(mockData[0].colors.length);

    mockData[0].colors.forEach((color, index) => {
        expect(colorCircles[index]).toHaveStyle(`background-color: ${color}`);
    });
});