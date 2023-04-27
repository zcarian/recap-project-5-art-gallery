import ArtPieceDetails from ".";
import { render, screen } from "@testing-library/react";

test("ArtPieceDetails component displays the name, artist, year, genre and image of the art piece", () => {
    render(<ArtPieceDetails image="https://picsum.photos/200/300" name="name"/>);
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
});