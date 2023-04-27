import ArtPieces from ".";
import { render, screen } from "@testing-library/react";

const mockData = [
    {
      name: 'Art Piece 1',
      slug: 'art-piece-1',
      imageSource: '/path/to/image1.jpg',
      artist: 'Artist 1',
    },
    {
      name: 'Art Piece 2',
      slug: 'art-piece-2',
      imageSource: '/path/to/image2.jpg',
      artist: 'Artist 2',
    },
  ];

test('A list of art pieces is displayed', () => {
    render(<ArtPieces data={mockData}/>);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const pieces = screen.getAllByRole('listitem');
    expect(pieces).toHaveLength(mockData.length);
});

test("Each art piece's image, name and artist are displayed", () => {
    render(<ArtPieces data={mockData}/>);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockData.length);

    const names = screen.getAllByLabelText(/name/i);
    expect(names).toHaveLength(mockData.length);

    const artists = screen.getAllByLabelText(/artist/i);
    expect(artists).toHaveLength(mockData.length);
});

test('The favorite-button is displayed in each entry in the list view', () => {
    render(<ArtPieces data={mockData}/>);
    const buttons = screen.getAllByRole('button', {name: /favorite/i});
    expect(buttons).toHaveLength(mockData.length);
})